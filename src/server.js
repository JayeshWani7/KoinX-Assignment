const app = require("./app");
const connectDB = require("./utils/database"); // Ensure this handles MongoDB connection
const fetchCryptoData = require("./jobs/fetchCryptoData");
const cron = require("node-cron");

require('dotenv').config({path: '../.env'}); // Load environment variables
const PORT = process.env.PORT || 3001;
console.log("Mongo URI:", process.env.MONGO_URI);

// Connect to MongoDB
connectDB();

// Schedule the background job to run every 2 hours
cron.schedule("0 */2 * * *", async () => {
  try {
    console.log("Fetching cryptocurrency data...");
    await fetchCryptoData();
    console.log("Data fetched and stored successfully.");
  } catch (error) {
    console.error("Error fetching cryptocurrency data:", error);
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
