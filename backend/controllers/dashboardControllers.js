const { HoldingsModel } = require("../model/HoldingsModel");

module.exports = (getCache) => {
  return {
    getAllHoldings: async (req, res) => {
      const id = req.params.id;
      const allHoldings = await HoldingsModel.find({ userId: id }).lean();
      res.json(allHoldings);
    },

    getWatchlists: async (req, res) => {
      const cache = getCache(); // get the latest cache
      if (!cache) {
        return res.status(503).json({ error: "Watchlist data not ready yet" });
      }
      res.json(cache);
    },
  };
};
