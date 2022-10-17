const mongoose = require("mongoose");
const productSchema = require("../schema/productSchema");

const Product = mongoose.model("product", productSchema);

module.exports = Product;
