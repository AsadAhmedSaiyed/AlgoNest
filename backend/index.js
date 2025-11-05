require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const { fetchWatchlistData } = require("./util/fetchData");

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const dashboardRoutesFactory = require("./routes/dashboardRoutes");

const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;


const app = express();
app.use(
  cors({
    origin: [
      "https://algo-nest.vercel.app",
      "https://algonest-dashboard.vercel.app",
       "http://localhost:3000",
       "http://localhost:5173"
    ],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());


app.use("/", authRoutes);
app.use("/user", userRoutes);

let cache = null;

// Pass a getter function so the router can access the latest cache
const dashboardRoutes = dashboardRoutesFactory(() => cache);
app.use("/dashboard/:id", dashboardRoutes);

// Function to update cache periodically
async function updateCache() {
  cache = await fetchWatchlistData();
}

// Connect to MongoDB and start server
async function connectToDb() {
  try {
    await mongoose.connect(url);
    console.log("MongoDB connected");

    // Initial cache fetch
    await updateCache();

    // Update cache every 30s
    setInterval(updateCache, 30000);

    app.listen(PORT, () => {
      console.log(`App started on port ${PORT}`);
    });
  } catch (err) {
    console.error("Connection failed!", err);
  }
}

connectToDb();
