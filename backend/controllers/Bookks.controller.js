const Books =require( "../model/Book");
 const getBook=async (req,res)=>{
    try{
        const book= await Books.find()
        res.status(200).json(book);
        
       
    }catch{(e)=>{
  console.log("no err")
    }}
}

module.exports=getBook;