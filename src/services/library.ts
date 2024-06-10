import {Book} from "../models/book"
import { Borrower } from "../models/borrower";
import { LoanManager } from "../services/loanmanager";

export class Library {
    private books: Map<number, Book> = new Map();
    private borrowers: Map<number, Borrower> = new Map();
    private loanManager: LoanManager = new LoanManager(); 
    

    addBook(book: Book): void {
        this.books.set(book.Id, book);
    }

    addBorrower(borrower: Borrower): void {
        this.borrowers.set(borrower.Id, borrower)
    };

    removeBook(book: Book): void {
        this.books.delete(book.Id);
    };


    borrowBook(bookId: number, borrowerId: number): boolean {
        const book = this.books.get(bookId)
        const borrower = this.borrowers.get(borrowerId)

        if (book && borrower && !book.isBorrowed) {
            book.isBorrowed = true;
            this.loanManager.addLoan(bookId, borrowerId);
            return true;
        }
        return false;
    };

     listBorrowedBooks(): Book[] {
        return Array.from(this.books.values()).filter(book => book.isBorrowed)
    };   
    
};



