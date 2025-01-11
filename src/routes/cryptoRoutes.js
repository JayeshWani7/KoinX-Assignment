const express = require("express");
const router = express.Router();
const fetchCryptoData = require("../jobs/fetchCryptoData"); // Adjust path if needed

// Endpoint to manually trigger data fetching
router.get("/trigger-fetch", async (req, res) => {
  try {
    console.log("Manual fetch endpoint hit.");
    await fetchCryptoData();
    res.status(200).send("Data fetched successfully");
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send("Error fetching data");
  }
});

module.exports = router;
