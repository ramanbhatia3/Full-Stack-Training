const data = require("../utils/data");

const getAllProducts = (req, res) => {
    res.status(200).json(data);
};

const getUser = (req, res) => {
    res.status(200).send("userdata");
};

module.exports = {
    getAllProducts,
    getUser,
};
