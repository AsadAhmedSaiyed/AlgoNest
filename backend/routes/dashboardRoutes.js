const express = require("express");
const router = express.Router();

module.exports = function(getCache) {
  const { getAllHoldings, getWatchlists } = require("../controllers/dashboardControllers")(getCache);

  router.get("/allHoldings", getAllHoldings);
  router.get("/watchlist", getWatchlists);

  return router;
};
