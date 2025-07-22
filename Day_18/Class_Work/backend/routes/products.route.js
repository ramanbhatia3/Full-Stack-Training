const express = require("express");
const { products } = require("../controllers/products.controller");
const { auth } = require("../middlewares/auth.middleware");

const productRoute = express.Router();

productRoute.get("/products",auth,products);


module.exports = {
    productRoute
}