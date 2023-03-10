const express = require("express");
const router = express.Router();
const { createProduct, getProduct } = require("../controllers/product");


router.post("/products", createProduct);
router.get("/products", getProduct)


module.exports = router;
