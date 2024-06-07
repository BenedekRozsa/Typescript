import {Book} from "../models/book"
import { Borrower } from "../models/borrower";

export class Library {
    private books: Map<number, Book> = new Map();
    private borrowers: Map<number, Borrower> = new Map;

    addBook(book: Book): void {
        this.books.set(book.id, book);
    }

    addBorrower(borrower: Borrower): void {
        this.borrowers.set(borrower.id, borrower)
    };

    removeBook(book: Book): void {
        this.books.delete(book.id);
    };
}
