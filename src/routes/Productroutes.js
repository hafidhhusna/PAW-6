// routes/productRoutes.js
const express = require("express");
const {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

const router = express.Router();

// Create a new product
router.post("/products", createProduct);

// Get all products
router.get("/products", getAllProducts);

// Get a single product by ID
router.get("/products/:id", getProductById);

// Update a product by ID
router.put("/products/:id", updateProduct);

// Delete a product by ID
router.delete("/products/:id", deleteProduct);

module.exports = router;
