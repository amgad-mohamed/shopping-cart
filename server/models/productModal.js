const mongoose = require("mongoose");
const productSchema = require("../schema/productScchema");

const Product = mongoose.model("producr", productSchema);

module.exports = Product;
