"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const library_1 = require("./services/library");
const category_1 = require("./models/category");
const typeguards_1 = require("./utils/typeguards");
const library = new library_1.Library();
const romanceCategory = new category_1.Romance('Romantika', 'regény');
const CrimeCategory = new category_1.Romance('Romantika', 'sorozat');
const book1 = {
    Id: 1,
    title: 'Murder on the Nile',
    author: 'Agatha Christie',
    category: CrimeCategory
};
const book2 = {
    Id: 2,
    title: 'Kate and Leo',
    author: 'Unknown',
    category: romanceCategory
};
const borrower1 = {
    Id: 1,
    name: 'Kis Sarolt',
    dateOfBirth: new Date('2004-05-12')
};
const borrower2 = {
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
library.borrowBook(1, 2);
library.borrowBook(2, 2);
console.log(library);
console.log('Ezek a borrowed bookok:', library.listBorrowedBooks());
console.log('Ez a Book typeguards: ', (0, typeguards_1.isBook)(book1));
console.log('Ez a Crime typeguards: ', (0, typeguards_1.isCategories)(book1.category));
console.log('Ez a Crime typeguards: ', (0, typeguards_1.isCategories)(book2.category));
console.log('kikölcsönzött könyvek', library.listBorrowedBooks());
