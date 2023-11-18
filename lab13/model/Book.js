let books = [];
let count = 0;
module.exports = class Book {

    constructor(id, title, ISBN, publishedDate, author) {
        this.id = id;
        this.title = title;
        this.ISBN = ISBN;
        this.publishedDate = publishedDate;
        this.author = author;
    }

    addBook() {
        this.id = count++;
        books.push(this)
    }

    update(id) {
        const index = books.findIndex(p => p.id === id);
        if (index > -1) {
            this.id = id;
            books[index] = this;
        } else {
            throw new Error(`Product with ID: ${id} cannot find in DB`);
        }
    }

    static getBookByID(id) {
        return books.findIndex(p => p.id = id);
    }

    static getBook() {
        return books
    }

    static deleteById(id) {
        const index = books.findIndex(p => p.id === id);
        if (index > 0) {
            books.slice(index, 1)
            count--;
        } else {
            throw new Error(`Product with ID: ${id} cannot find in DB`);
        }
    }
}