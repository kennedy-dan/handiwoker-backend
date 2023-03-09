const express = require("express");
const env = require("dotenv");
const mongoose = require("mongoose");
const app = express();
const path = require("path");
const cors = require("cors");


const productRoute = require("./src/routes/product");
const cartRoute = require("./src/routes/cart")


env.config();

const port = process.env.PORT || 8000;
mongoose
  .connect(`mongodb+srv://mom:mommy@cluster0.8gbdb.mongodb.net/?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
  })
  .then(() => {
    console.log("database connected");
  });

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json());

app.use("/api", productRoute);
app.use("/api", cartRoute);

env.config();

app.listen(port, () => {
  console.log(`running on port ${port}`);
});
