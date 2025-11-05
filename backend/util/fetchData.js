require("dotenv").config();
const axios = require("axios");
const { symbols } = require("../Symbol");

module.exports.fetchWatchlistData = async () =>{
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
  const filtered = results.filter((item) => item !== null);
  console.timeEnd("fetch-stocks");
  return filtered;
}