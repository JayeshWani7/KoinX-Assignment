const express = require("express");
const CryptoData = require("../models/CryptoData");
const router = express.Router();

router.get("/deviation", async (req, res) => {
  const { coin } = req.query;
  try {
    const prices = await CryptoData.find({ coin })
      .sort({ timestamp: -1 })
      .limit(100)
      .select("price");

    if (prices.length === 0) {
      return res.status(404).json({ error: "No data available for the requested coin" });
    }

    const priceArray = prices.map((doc) => doc.price);
    const mean = priceArray.reduce((sum, price) => sum + price, 0) / priceArray.length;
    const variance =
      priceArray.reduce((sum, price) => sum + Math.pow(price - mean, 2), 0) / priceArray.length;
    const standardDeviation = Math.sqrt(variance);

    res.json({ deviation: standardDeviation.toFixed(2) });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
