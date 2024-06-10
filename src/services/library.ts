import {Book} from "../models/book"
import { Borrower } from "../models/borrower";
import { LoanManager } from "../models/loanmanager";

export class Library {
    private books: Map<number, Book> = new Map();
    private borrowers: Map<number, Borrower> = new Map;
    private loans: Map<number, number> = new Map;

    addBook(book: Book): void {
        this.books.set(book.Id, book);
    }

    addBorrower(borrower: Borrower): void {
        this.borrowers.set(borrower.Id, borrower)
    };

    removeBook(book: Book): void {
        this.books.delete(book.Id);
    };

    borrowBook(bookId: number, borrowerId: number): void {
        const book = this.books.get(bookId)
        const borrower = this.books.get(borrowerId)

        if(book && borrower !book.isBorrowed)
    };

    listBorrowedBooks(): Book[] {
        return Array.from(this.books.values()).filter(book => book.isBorrowed)
    };

}
