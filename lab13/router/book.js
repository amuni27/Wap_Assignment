const express = require('express')
const router = express.Router();
const {deleteById, updateBook, addBook, getAllBook, getBookById} = require("../controller/book-controller")

router.get("/", getAllBook);
router.get("/:id", getBookById)
router.post("/", addBook)
router.put("/:id", updateBook)
router.delete("/:id", deleteById)

module.exports = router;