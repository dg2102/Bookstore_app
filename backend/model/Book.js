const mongoose=require('mongoose')

const bookSchema= mongoose.Schema({
    name:String,
    title:String,
     price:Number,
    category:String,
    image:String
})
const Books=mongoose.model("Books",bookSchema)
module.exports= Books;