const express = require("express");
const { connection } = require("./configs/db");
const { userRoute } = require("./routes/user.routes");
const { productRoute } = require("./routes/products.routes");
const cors = require("cors");
const { auth } = require("./middlewares/auth.middleware");

require('dotenv').config() 

const app = express();
app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
  res.send("Server is running");
})


app.use("/api/user",userRoute);
app.use("/api/product",auth,productRoute);

const PORT = process.env.PORT;

app.listen(PORT,async()=>{
  try{
    console.log("Database is connecting");
    await connection;
    console.log("Database is connected");
  }catch(error){
    console.log({error:error});
    
  }
  console.log(`Server is running at http://localhost:${PORT}`);  
})