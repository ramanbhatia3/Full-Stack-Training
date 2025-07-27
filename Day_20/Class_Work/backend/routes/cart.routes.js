// routes/cart.routes.js
const express = require('express');
const CartModel = require('../models/cart.model');
const { auth } = require('../middlewares/auth.middleware'); // ✅ correct import

const router = express.Router();

// Add product to cart
router.post('/add', auth, async (req, res) => {
    const { productId, quantity } = req.body;
    const userId = req.userId;

    try {
        let cart = await CartModel.findOne({ userId });

        if (!cart) {
            cart = new CartModel({ userId, products: [] });
        }

        const existingProduct = cart.products.find(p => p.productId.toString() === productId);

        if (existingProduct) {
            existingProduct.quantity += quantity;
        } else {
            cart.products.push({ productId, quantity });
        }

        await cart.save();
        res.status(200).json({ msg: "Product added to cart", cart });
    } catch (err) {
        res.status(500).json({ msg: "Server error", error: err.message });
    }
});

// Get cart
router.get('/', auth, async (req, res) => {
    try {
        const cart = await CartModel.findOne({ userId: req.userId }).populate("products.productId");
        if (!cart) return res.status(200).json({ msg: "Cart is empty", products: [] });

        res.status(200).json({ msg: "Cart fetched", cart });
    } catch (err) {
        res.status(500).json({ msg: "Server error", error: err.message });
    }
});

// Remove product
router.delete('/remove/:productId', auth, async (req, res) => {
    try {
        const cart = await CartModel.findOne({ userId: req.userId });

        if (!cart) return res.status(404).json({ msg: "Cart not found" });

        cart.products = cart.products.filter(p => p.productId.toString() !== req.params.productId);
        await cart.save();

        res.status(200).json({ msg: "Product removed from cart", cart });
    } catch (err) {
        res.status(500).json({ msg: "Error removing product", error: err.message });
    }
});

module.exports = router;
