const Product = require("../model/product");
const slugify = require("slugify");
// const Category = require("../model/category");
const cloudinary = require("cloudinary");

cloudinary.config({
  cloud_name: "drxdger3x",
  api_key: "597494831934642",
  api_secret: "gIr8Q_9aGE2pETYZrluxM_EMca0",
});

exports.createProduct = async (req, res) => {
  let imagesLinks = [];

  const images = req.body.images;

  for (let i = 0; i < images.length; i++) {
    const result = await cloudinary.v2.uploader.upload(images[i], {
      folder: "drxdger3x/home/products",
    });

    imagesLinks.push({
      public_id: result.public_id,
      url: result.secure_url,
    });
  }

  req.body.images = imagesLinks;

  const prod = await Product.create(req.body);

  res.status(200).json({
    success: true,
    prod,
  });
};

exports.getProduct = async (req, res) => {
  const products = await Product.find({})
    .exec();
  res.status(200).json({ products });
};


