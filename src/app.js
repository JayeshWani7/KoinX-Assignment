const express = require("express");
const statsRouter = require("./routes/stats");
const deviationRouter = require("./routes/deviation");

const app = express();
app.use(express.json());
app.use(statsRouter);
app.use(deviationRouter);

module.exports = app;
