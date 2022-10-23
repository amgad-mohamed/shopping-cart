const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const productRouter = require("./routes/routes");
const orderRouter = require("./routes/orderRoutes");
const runDb = require("./config/db");

const app = express();
app.use(bodyParser.json());
app.use("/", productRouter);
app.use("/", orderRouter);

// Run DB
runDb();

app.listen(5000, () => {
  console.log("Running in port 5000");
});
