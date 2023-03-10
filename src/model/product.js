const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
      type: String,
      required: true
  },
  description: {
      type: String,
      required: true
  },
  images: [
    {
      public_id: {
        type: String,
        // required: true,
      },
      url: {
        type: String,
        // required: true,
      },
    },
  ],


  updateAt: Date
}, {timestamps: true});

module.exports = mongoose.model("Product", productSchema);
