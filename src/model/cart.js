const mongoose = require("mongoose");
const cartSchema = new mongoose.Schema(
  {

    cartItems: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',
                required: true
            },
            quantity: {
                type: Number,
                default: 1
            },
            // price: {
            //     type: String,
            //     required: true
            // }
        }
    ]
  },
  { timestamps: true }

);

module.exports = mongoose.model("Cart", cartSchema);