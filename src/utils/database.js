const mongoose = require("mongoose");
require("dotenv").config({path: '../.env'}); // Ensure environment variables are loaded
console.log("Mongo URI:", process.env.MONGO_URI);



const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected successfully: ${conn.connection.host}`);
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
    // Optional: Retry logic or other measures can be added here
    process.exit(1); // Exits the application if connection fails
  }
};

module.exports = connectDB;
