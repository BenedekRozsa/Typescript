"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanManager = void 0;
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
class LoanManager {
    constructor() {
        this.loans = new Map();
    }
    addLoan(bookId, borrowerId) {
        this.loans.set(bookId, borrowerId);
    }
    ;
    removeloan(bookId) {
        this.loans.delete(bookId);
    }
    ;
    listLoans() {
        return Array.from(this.loans.values());
    }
}
exports.LoanManager = LoanManager;
