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
    id:  1,
    title:  'Murder on the Nile',
    author:  'Agatha Christie',
    category:  CrimeCategory
};

const book2: Book = {
    id: 2,
    title: 'Kate and Leo',
    author: 'Unknown',
    category: romanceCategory
};

const borrower1: Borrower = {
    id: 1,
    name: 'Kis Sarolt',
    dateOfBirth: new Date('2004-05-12')
};

const borrower2: Borrower = {
    id: 2,
    name: 'Nagy János',
    dateOfBirth: new Date('1971-04-17')
};