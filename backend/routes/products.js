// product routes
const express = require('express');
const productRoutes = express.Router();
const Product = require('../models/product'); //

const {
  getAllProducts,
  getProductById,
  createProduct,
  updateProductById,
  deleteProductById,
} = require('../controllers/productController');

// CREATE a new product

productRoutes.post('/', async (req, res) => {
  try {
    // Create a new product based on the request body
    const newProduct = new Product(req.body);

    // Save the new product to the database
    const savedProduct = await newProduct.save();

    res.status(201).json(savedProduct);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET all products

productRoutes.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET a single product by ID

productRoutes.get('/:id', async (req, res) => {
  try {
    const productId = req.params.id;

    // Use Mongoose to find the product by its ID
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.status(200).json(product);
  } catch (error) {
    console.error('Error fetching product by ID:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update an existing product by ID
productRoutes.put('/:id', async (req, res) => {
  try {
    const { id } = req.params; // Get the product ID from the route parameters
    const updateFields = req.body; // Get the fields to update from the request body

    // Find the product by ID and update the specified fields
    const updatedProduct = await Product.findByIdAndUpdate(id, updateFields, {
      new: true, // Return the updated product after the update
    });

    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    return res.status(200).json(updatedProduct);
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// DELETE an existing product by ID

productRoutes.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params; // Get the product ID from the route parameters

    // Find the product by ID and remove it
    const deletedProduct = await Product.findByIdAndRemove(id);

    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    return res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = productRoutes;
