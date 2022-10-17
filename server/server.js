const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const router = require("./routes/routes");

const app = express();
app.use(bodyParser.json());
app.use("/", router);

const connectionString = "mongodb://localhost/react-shopping-cart";
mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => console.log("connection Done"));

app.listen(5000, () => {
  console.log("Running in port 5000");
});
