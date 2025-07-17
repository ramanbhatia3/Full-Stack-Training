const express = require("express");
const router = express.Router();
const { getAllProducts, getUser } = require("../controllers/productController");

router.get("/products", getAllProducts);
router.get("/user", getUser);

module.exports = router;
