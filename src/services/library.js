"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
const loanmanager_1 = require("../services/loanmanager");
class Library {
    constructor() {
        this.books = new Map();
        this.borrowers = new Map();
        this.loanManager = new loanmanager_1.LoanManager();
    }
    addBook(book) {
        this.books.set(book.Id, book);
    }
    addBorrower(borrower) {
        this.borrowers.set(borrower.Id, borrower);
    }
    ;
    removeBook(book) {
        this.books.delete(book.Id);
        this.loanManager.removeloan(book.Id);
    }
    ;
    borrowBook(bookId, borrowerId) {
        const book = this.books.get(bookId);
        const borrower = this.borrowers.get(borrowerId);
        if (book && borrower && !book.isBorrowed) {
            book.isBorrowed = true;
            this.loanManager.addLoan(bookId, borrowerId);
            return true;
        }
        return false;
    }
    ;
    returnBook(bookId) {
        const book = this.books.get(bookId);
        if (book && book.isBorrowed) {
            book.isBorrowed = false;
            this.loanManager.removeloan(bookId);
        }
    }
    ;
    listBorrowedBooks() {
        return Array.from(this.books.values()).filter(book => book.isBorrowed);
    }
    ;
    listBorrowers() {
        return Array.from(this.borrowers.values());
    }
    ;
}
exports.Library = Library;
;
