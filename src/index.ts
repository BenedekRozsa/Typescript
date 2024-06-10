import { Library } from "./services/library";
import { LoanManager } from "./services/loanmanager";
import { Book } from "./models/book";
import { Crime } from "./models/category";
import { Romance } from "./models/category";
import { Borrower } from "./models/borrower";

const library = new Library();

const romanceCategory = new Romance('Romantika', 'regény');
const CrimeCategory = new Romance('Romantika', 'sorozat');

const book1: Book = {
    Id:  1,
    title:  'Murder on the Nile',
    author:  'Agatha Christie',
    category:  CrimeCategory
};

const book2: Book = {
    Id: 2,
    title: 'Kate and Leo',
    author: 'Unknown',
    category: romanceCategory
};

const borrower1: Borrower = {
    Id: 1,
    name: 'Kis Sarolt',
    dateOfBirth: new Date('2004-05-12')
};

const borrower2: Borrower = {
    Id: 2,
    name: 'Nagy János',
    dateOfBirth: new Date('1971-04-17')
};

library.addBook(book1);
library.addBook(book2);

library.addBorrower(borrower1);
library.addBorrower(borrower2);

/*
console.log(book1);
console.log(book2);
console.log(borrower1);
*/
library.borrowBook(1,2);
library.borrowBook(2,2);
console.log(library);
console.log('Ezek a borrowed bookok:', library.listBorrowedBooks());



