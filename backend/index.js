const express=require('express');
const mongoose=require("mongoose")
const cors=require("cors")
const bcrypt = require('bcrypt');
const dotenv=require('dotenv').config();
const route=require("./routes/Routes.js")
const Bookroute=require("./routes/Routes.js")
const RegisterRoute=require("./routes/User.route.js")
const login=require("./routes/login.route.js")

const app=express();
const port= process.env.PORT;

//middlewears
app.use(express.json())
app.use(cors())
const url=process.env.MONGODB_URL;
//connect mongodb
    mongoose.connect("mongodb://localhost:27017")
        // { useNewUrlParser: true, useUnifiedTopology: true }
    
app.use("/books",Bookroute)
 app.use("/register",RegisterRoute)
 app.use("/login",login)
//port running
app.listen(port, ()=>{
    console.log(`running on ${port}`)
})