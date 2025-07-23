const express = require("express");
const { createProduct, getProduct } = require("../controllers/products.controller");

const productRoute = express.Router();

productRoute.post("/create-product",createProduct);
productRoute.get("/get-product",getProduct);

module.exports  =  {
    productRoute
}