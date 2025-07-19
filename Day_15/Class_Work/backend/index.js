const express = require("express")
const { connection } = require("./configs/db");
const { userRoute } = require("./routes/user.route"); 

const app = express();
app.use(express.json());

app.use(userRoute);

const PORT = 8080;


app.get("/",(req,res)=>{
    res.status(200).send('<h1 style = "color:blue; background-color:yellow; width: 50%; margin:auto">Welcome to RB</h1>')
});

app.listen(PORT, async() => {
    try{
        console.log("DataBase is connecting...");
        
      await connection
      console.log("DataBase is connected");
      
    }catch(error){
      console.log(error);
      
    }
    console.log(`Server is running at http://localhost:${PORT}`);
})


