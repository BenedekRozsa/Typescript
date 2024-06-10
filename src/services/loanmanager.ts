import { Book } from "../models/book"
/*
export class LoanManager <T extends {id: number}> {
    protected items: Map<number, T> = new Map();

    addItem(item:T): void {
        this.items.set(item.id, item);       
    };

    removeItem(item: T): void {
        this.items.delete(item.id);
    };
    listAllLoanedBooks(): T[] {
        return Array.from(this.items.values());
    };
};
*/

export class LoanManager{ 
    protected loans: Map<number, number> = new Map();
    
    addLoan(bookId: number, borrowerId: number): void {
        this.loans.set(bookId, borrowerId);
    };

    removeloan(bookId: number): void {
        this.loans.delete(bookId);
    };

};

