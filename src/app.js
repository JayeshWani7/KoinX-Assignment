const express = require("express");
const statsRouter = require("./routes/stats");
const deviationRouter = require("./routes/deviation");
const triggerFetch = require("./routes/cryptoRoutes")

const app = express();
app.use(express.json());
app.use(statsRouter);
app.use(deviationRouter);
app.use("/api",triggerFetch);
module.exports = app;
