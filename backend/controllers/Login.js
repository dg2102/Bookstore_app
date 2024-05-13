const User= require("../model/User.js")
const bcrypt = require('bcrypt');

const login= async(req,res)=>{
    try{ 
        
        const {email,password}= req.body
    const user= await User.findOne({email})
    const isMatch= await bcrypt.compare(password,user.password)
   
    if(!user || !isMatch){
        res.status(400).json({message:"invalid password or username"})

    } else{
        res.status(200).json({message:"user succesfully logged in"})
    }
    }
    catch (error) {
        console.error("Error occurred:", error);
        res.status(500).json({message: "Internal server error"});
    }
   

 
 }
 module.exports = login ;