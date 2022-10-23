const mongoose = require("mongoose");

const connectionString = "mongodb://localhost/react-shopping-cart";
function runDb() {
  return mongoose
    .connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((res) => console.log("connection Done"));
}

module.exports = runDb;
