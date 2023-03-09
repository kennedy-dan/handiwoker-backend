const express = require("express");
const router = express.Router();
const { createProduct, getProduct } = require("../controllers/product");


router.post("/products", createProduct);
router.get("/products", getProduct)
// router.get('/product/get/:slug', getProductBySlug)
// router.get('/products/get/:_id', getProductById)

module.exports = router;
