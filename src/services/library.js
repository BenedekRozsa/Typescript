"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
class Library {
    constructor() {
        this.books = new Map();
        this.borrowers = new Map;
    }
    addBook(book) {
        this.books.set(book.id, book);
    }
    addBorrower(borrower) {
        this.borrowers.set(borrower.id, borrower);
    }
    ;
    removeBook(book) {
        this.books.delete(book.id);
    }
    ;
}
exports.Library = Library;
