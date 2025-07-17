const mongoose = require("mongoose");

const connection = mongoose.connect("mongodb+srv://ramanbhatia3:Raman0307@cluster0.rip4co7.mongodb.net/myFirstDB?retryWrites=true&w=majority&appName=Cluster0");


module.exports={
    connection
}