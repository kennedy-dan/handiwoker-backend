const express = require("express");
const { addToCart, getCartItems,removeCartItems } = require("../controllers/cart");
const router = express.Router();


router.post("/cart", addToCart);
router.get("/getcart", getCartItems);
router.put('/cart/:productId', removeCartItems)
module.exports = router;
