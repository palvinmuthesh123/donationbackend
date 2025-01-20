const express = require("express");
const { 
  createProduct, 
  updateProduct, 
  deleteProduct, 
  getProducts, 
  getProductById 
} = require("../controllers/productController");
const { productValidator } = require("../utils/validators");

const router = express.Router();

// Create a new product
router.post("/", productValidator, createProduct);

// Update an existing product
router.put("/:id", productValidator, updateProduct);

// Delete a product
router.delete("/:id", deleteProduct);

// Get all products
router.get("/", getProducts);

// Get a product by ID
router.get("/:id", getProductById);

module.exports = router;
