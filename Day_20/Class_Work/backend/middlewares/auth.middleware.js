// middlewares/auth.middleware.js
const { userModel } = require("../models/user.model");
const jwt = require("jsonwebtoken");
require('dotenv').config();

const auth = async (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).send({ msg: "No token provided" });
    }

    try {
        const decoded = jwt.verify(token, process.env.SECRET);
        const userId = decoded.userID;

        const matchedUser = await userModel.findById(userId);
        if (matchedUser) {
            req.userId = userId; // ✅ store it for downstream use
            next();
        } else {
            return res.status(403).send({ msg: "User not authorized" });
        }

    } catch (error) {
        return res.status(401).send({ msg: error.message });
    }
};

module.exports = { auth }; // ✅ named export
