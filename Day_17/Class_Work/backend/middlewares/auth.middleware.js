const { userModel } = require("../models/user.model");
const jwt = require("jsonwebtoken");



const auth = async(req,res,next) =>{
    const token = req.headers.authorization;
    console.log(token);
    
    if(!token){
        res.send("Invalid Token")
    }


    try {
        const decoded = jwt.verify(token, 'RB');

        const userId = decoded.userId;
        const matchedUser = await userModel.findOne({_id:userId});
        if(matchedUser){
            req.headers = decoded.userId;
            next();
        }else{
            return res.status(400).send({msg:"user not authorized"})
        }

    } catch (error) {
        return res.status(400).send({msg:error.message})
    }
}

module.exports = {
    auth
}