

const login =require("../controllers/Login")
const express=require('express')
const router = express.Router();

router.post("/",login)
module.exports=router;

