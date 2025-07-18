const express = require("express");
const { userSignup } = require("../controllers/user.controller");

const userRoute = express.Router();

userRoute.post("/signup",userSignup)

module.exports = {
    userRoute
}