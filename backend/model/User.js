const mongoose=require('mongoose');
const RegisterUser= mongoose.Schema({
name: String,
email: String,
password: String

})
const UserReg= mongoose.model("UserReg",RegisterUser)
module.exports= UserReg;