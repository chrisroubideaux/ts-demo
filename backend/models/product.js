// product model
const mongoose = require('mongoose');

// Define the product schema
const productSchema = new mongoose.Schema({
  id: Number,
  name: String,
  title: String,
});

// Create a Product model based on the product schema
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
