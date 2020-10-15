const express = require('express')
const {getAllBooks,getOneBook,newBook,updateBook,deleteBook} = require('../controllers/index')

const router = express.Router()

router.get("/",getAllBooks)

router.get("/:id",getOneBook)

router.post("/",newBook)

router.put("/:id",updateBook)

router.delete("/:id",deleteBook)

module.exports = router