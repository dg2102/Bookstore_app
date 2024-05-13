const User= require("../model/User.js")
const bcrypt = require('bcrypt');
 const signup=async(req,res)=>{
 try{
    const {name,email,password} =req.body;
    const user= await User.findOne({email})
    console.log(user)
    if(user){
        return res.status(400).json({message:"user already exists"})
        
    }
    const hashpassword= await bcrypt.hash(password,10)
    const newUser= new User({
        name:name,
        email:email,
        password:hashpassword
    })
     newUser.save()
     res.status(201).json({message:"user created successgully",user: {
     name:name,
     email:email,
     }
     })
 } catch{
 res.status(500).json({message:"user failed to signin"})
 }
 }
 

 module.exports=signup;
   

 
 
 module.exports = signup ;
