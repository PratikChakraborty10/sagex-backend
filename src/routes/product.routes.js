const express = require('express');
const router = express.Router();
const validateRequest = require('../middleware/validateRequest');
const productSchema = require('../models/product.schema');
const { addProduct, getAllProducts, getProductById, deleteProductById, updateProductById } = require('../controllers/product.controller');

// Add a new product
router.post('/add-product', validateRequest(productSchema), addProduct);
// Get all products
router.get('/get-products', getAllProducts);
// Get a single product by ID
router.get('/get-product/:id', getProductById);
// Delete a single product by ID
router.delete('/delete-product/:id', deleteProductById)
// Update a single product by ID
router.put('/update-product/:id', updateProductById)

module.exports = router;