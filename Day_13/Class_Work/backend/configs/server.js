const express = require("express");
const app = express();

const productRoutes = require("../routes/productRoutes");
const notFound = require("../middlewares/notFound");

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send('<h1 style="color:blue; background-color:yellow; width:50%; margin:auto;">Welcome to RB</h1>');
});

app.use("/api", productRoutes);
app.use(notFound);

module.exports = app;
