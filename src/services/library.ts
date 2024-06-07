import {Book} from "../models/book"
import { Borrower } from "../models/borrower";

export class Library {
    private books: Map<number, Book> = new Map();
    private borrowers: Map<number, Borrower> = new Map;

    addBook(book: Book): void {
        this.books.set(book.id, book);
    }

}
