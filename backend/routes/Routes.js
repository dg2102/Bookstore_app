
const express = require('express');
const router = express.Router();
const getBook = require("../controllers/Bookks.controller.js");

// Define route to fetch books
router.get("/", getBook);

module.exports = router;