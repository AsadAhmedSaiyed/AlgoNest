require("dotenv").config();
const { symbols } = require("./Symbol");
const { Signup, Login } = require("./AuthController");
const { OrdersModel } = require("./model/OrdersModel");
const { HoldingsModel } = require("./model/HoldingsModel");
const { UsersModel } = require("./model/UsersModel");
const express = require("express");
const cookieParser = require("cookie-parser");
const axios = require("axios");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;
const cors = require("cors");

const app = express();

app.use(cookieParser());
app.use(
  cors({
    origin: [
      "https://algo-nest.vercel.app",
      "https://algonest-dashboard.vercel.app",
    ],
    credentials: true,
  })
);



app.use(express.json());

let cache = null;
let cacheTime = 0;

app.post("/signup", Signup);
app.post("/login", Login);

app.post("/logout", (req, res) => {
  res.clearCookie("token", { path: "/" });
  res.status(200).json({ message: "Logged out successfully" });
});

app.get("/user/:id", async (req, res) => {
  try {
    const user = await UsersModel.findById(req.params.id).lean();
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ user });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

app.post("/user/:id/funds", async (req, res) => {
  const { type, amount } = req.body;
  const user = await UsersModel.findById(req.params.id);

  if (!user) return res.status(404).json({ message: "User not found" });

  if (type === "add") {
    user.initialBalance += amount;
    user.finalBalance += amount;
  } else if (type === "withdraw") {
    if (user.finalBalance < amount) {
      return res.status(400).json({ message: "Insufficient balance" });
    }
    user.finalBalance -= amount;
  }

  await user.save();
  res.json({ message: "Success", finalBalance: user.finalBalance });
});

app.get("/dashboard/:id/allHoldings", async (req, res) => {
  const id = req.params.id;
  let allHoldings = await HoldingsModel.find({ userId: id }).lean();
  res.json(allHoldings);
});

async function fetchWatchlistData() {
  console.time("fetch-stocks");
  const results = await Promise.all(
    symbols.map(async (symbol) => {
      try {
        const { data } = await axios.get("https://finnhub.io/api/v1/quote", {
          params: {
            symbol,
            token: process.env.API_KEY,
          },
        });

        const price = data.c;
        const prevClose = data.pc;
        const percentFloat = ((price - prevClose) / prevClose) * 100;
        const percent = percentFloat.toFixed(2) + "%";
        const isDown = percentFloat < 0;

        return {
          name: symbol,
          price,
          percent,
          isDown,
        };
      } catch (err) {
        console.error("Failed to fetch stock for symbol:", symbol, err.message);
        return null;
      }
    })
  );
  cache = results.filter((item) => item !== null);
  cacheTime = Date.now();
  console.timeEnd("fetch-stocks");
}

app.get("/dashboard/:id/watchlist", async (req, res) => {
  if (!cache) {
    return res.status(503).json({ error: "Watchlist data not ready yet" });
  }
  res.json(cache);
});

app.post("/user/:id/newOrder", async (req, res) => {
  const id = req.params.id;
  const cost = req.body.qty * req.body.price;

  if (req.body.mode === "BUY") {
    const user = await UsersModel.findById(id);
    if (user.finalBalance < cost) {
      return res.status(400).json({ message: "Insufficient balance" });
    }

    await UsersModel.findByIdAndUpdate(id, {
      $inc: { finalBalance: -cost },
    });

    const newOrder = new OrdersModel({
      userId: id,
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });

    const price = req.body.price;
    const fluctuation = (Math.random() * 5 - 2) / 100;
    const avg = +(price * (1 + fluctuation)).toFixed(2);

    const netChange = ((price - avg) / avg) * 100;
    const net = `${netChange >= 0 ? "+" : ""}${netChange.toFixed(2)}%`;

    const dayChange = (Math.random() * 6 - 3).toFixed(2);
    const day = `${dayChange >= 0 ? "+" : ""}${dayChange}%`;

    const newHolding = new HoldingsModel({
      userId: id,
      name: req.body.name,
      qty: req.body.qty,
      avg: avg,
      price: price,
      net: net,
      day: day,
    });

    await Promise.all([newOrder.save(), newHolding.save()]);
    return res.json({ message: "success" });
  }

  if (req.body.mode === "SELL") {
    const earnings = req.body.qty * req.body.price;

    await UsersModel.findByIdAndUpdate(id, {
      $inc: { finalBalance: earnings },
    });

    const epsilon = 0.01;
    const holding = await HoldingsModel.findOne({
      userId: id,
      name: req.body.name,
      price: { $gte: req.body.price - epsilon, $lte: req.body.price + epsilon },
      qty: req.body.qty,
    });

    if (holding) {
      const newOrder = new OrdersModel({
        userId: id,
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        mode: req.body.mode,
      });

      await newOrder.save();
      await HoldingsModel.deleteOne({
        userId: id,
        name: req.body.name,
        price: req.body.price,
      });

      return res.status(200).json({ message: "Holding deleted successfully" });
    } else {
      return res
        .status(404)
        .json({ message: "Stock with this price doesn't exist" });
    }
  }
});

app.get("/user/:id/allOrders", async (req, res) => {
  const id = req.params.id;
  let allOrders = await OrdersModel.find({ userId: id }).lean();
  res.json(allOrders);
});

app.get("/user/:id/summary", async (req, res) => {
  const user = await UsersModel.findById(req.params.id).lean();
  const holdings = await HoldingsModel.find({ userId: req.params.id }).lean();
  const investment = holdings.reduce((sum, h) => sum + h.qty * h.avg, 0);
  const currentValue = holdings.reduce((sum, h) => sum + h.qty * h.price, 0);
  const pl = currentValue - investment;
  const plPercent = investment === 0 ? 0 : ((pl / investment) * 100).toFixed(2);
  res.json({
    user: {
      username: user.username,
      initialBalance: user.initialBalance,
      finalBalance: user.finalBalance,
    },
    summary: {
      openingBalance: user.initialBalance,
      finalBalance: user.finalBalance,
      usedMargin: user.initialBalance - user.finalBalance,
      investment,
      currentValue,
      pl,
      plPercent,
    },
  });
});

async function connectToDb() {
  try {
    await mongoose.connect(url);
    console.log("connected");
    await fetchWatchlistData();
    setInterval(fetchWatchlistData, 30000);
    app.listen(PORT, () => {
      console.log("App started!");
    });
  } catch (err) {
    console.error("Connection failed!", err);
  }
}

connectToDb();


