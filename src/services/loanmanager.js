"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanManager = void 0;
class LoanManager {
    constructor() {
        this.items = new Map();
    }
    addItem(item) {
        this.items.set(item.id, item);
    }
    ;
    removeItem(item) {
        this.items.delete(item.id);
    }
    ;
    listAllLoanedBooks() {
        return Array.from(this.items.values());
    }
    ;
}
exports.LoanManager = LoanManager;
;
