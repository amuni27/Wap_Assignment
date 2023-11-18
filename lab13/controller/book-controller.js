const Book = require("../model/Book");

exports.addBook = (req, res) => {
    const {id, title, ISBN, publishedDate, author} = req.body
    const book = new Book(id, title, ISBN, publishedDate, author)
    book.addBook()
    res.status(201).end();
}
exports.updateBook = (req, res) => {
    const {id, title, ISBN, publishedDate, author} = req.body
    const book = new Book(null, title, ISBN, publishedDate, author)
    book.id = req.params.id;
    book.update(id)
    res.status(200).json(book);
}
exports.getBookById = (req, res) => {
    res.json(Book.getBookByID(req.params.id))


}
exports.getAllBook = (req, res) => {
    res.json(Book.getBook())
}

exports.deleteById = (req, res) => {
    Book.deleteById(req.params.id)
    res.status(200).end();
}