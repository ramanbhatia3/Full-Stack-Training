const { productModel } = require("../models/products.model");

const  createProduct=async(req,res)=>{
  const {title,brand,image,price,description,rating,category} = req.body;

  try {
    const data = new productModel({title,brand,image,price,description,rating,category});
    await data.save();

    res.status(200).send({msg:"Data stored successfully",data:data})
  } catch (error) {
    res.status(400).send({msg:"Failed!!",error:error.message})
  }
}

const getProduct=async (req,res) => {
  try {
    const data = await productModel.find();
    res.status(200).send({msg:"Data retrieved!",data:data});
  } catch (error) {
    res.status(400).send({error:error.message});
  }
}

module.exports = {
  createProduct,
  getProduct
}