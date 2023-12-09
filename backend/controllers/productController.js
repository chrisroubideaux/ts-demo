// product controller
const Product = require('../models/product'); // Correct import

// Create a new product
const createProduct = async (req, res) => {
  // Create a new product based on the request body
  try {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
    // Error handling response
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all products
const getAllProducts = async (req, res) => {
  // Get all products from the database
  try {
    const products = await Product.find();
    // Return the products
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET a single product by ID
const getProductById = async (req, res) => {
  // Check if the product ID is valid
  try {
    const productId = req.params.id;
    // Check if the product ID is valid
    if (!productId) {
      return res.status(400).json({ error: 'Invalid product ID' });
    }
    // Find the product by ID
    const product = await Product.findById(productId);
    // Return the product
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    // Return the product
    res.status(200).json(product);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Update a product by ID
const updateProductById = async (req, res) => {
  // Check if the product ID is valid
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    // Check if the product was found and updated
    if (!updatedProduct) {
      return res.status(404).json({ error: 'Product not found' });
    }
    // Return the updated product
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a product by ID
const deleteProductById = async (req, res) => {
  // Check if the product ID is valid then delete
  try {
    const deletedProduct = await Product.findByIdAndRemove(req.params.id);
    if (!deletedProduct) {
      return res.status(404).json({ error: 'Product not found' });
    }
    // Return the deleted product
    res.status(200).json({ message: 'Product deleted' });
    // Error handling response
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProductById,
};
