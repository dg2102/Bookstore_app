
 const signup = require("../controllers/User.controller")
 const login =require("../controllers/Login")
const express=require('express')
const router = express.Router();
router.post("/",signup)
router.post("/",login)
module.exports=router;

