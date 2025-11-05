const {UsersModel} = require("../model/UsersModel");
const {OrdersModel} = require("../model/OrdersModel");
const {HoldingsModel} = require("../model/HoldingsModel");

module.exports.getUser = async (req, res) => {
  try {
    const user = await UsersModel.findById(req.params.id).lean();
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ user });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
}

module.exports.getFunds = async (req, res) => {
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
}

module.exports.newOrder = async (req, res) => {
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
} 

module.exports.getAllOrders = async (req, res) => {
  const id = req.params.id;
  let allOrders = await OrdersModel.find({ userId: id }).lean();
  res.json(allOrders);
}

module.exports.getSummary =  async (req, res) => {
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
}