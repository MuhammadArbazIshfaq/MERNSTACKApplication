const dotenv=require("dotenv");
const express=require("express");

const mongoose=require("mongoose");
const app=express();

dotenv.config({path:"./config.env"});
const port=process.env.PORT;
require("./db/conn");
app.use(express.json());
const User=require("./model/userSchema");

 app.use(require("./routes/router"));  

app.get("/",(req,res) =>{
res.send("Hello from server one ");

});
app.get("/register",(req,res) =>{
    res.send("Hello from server register ");
    
    });

    app.get("/contact",(req,res) =>{
        res.send("Hello from server contact ");
        
        });
app.listen(port,()=>{
console.log(`server is runing at port no ${port}`);

});

