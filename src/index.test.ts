import { Book } from './models/book';
import { Borrower } from './models/borrower';
import { Library } from './services/library';

describe('Library', () => {
  let library: Library;
  
    beforeEach(() => {
    library = new Library();
    // Itt hozzáadhatja a tesztelni kívánt könyveket, kölcsönzőket stb.
    });

    test('addBook should add a book to the library', () => {
        const book: Book = { Id: 1, title: 'Test Book', author: 'Test Author', category: { name: 'Test Category' }, isBorrowed: false};

        library.addBook(book);

        const books = library.listBorrowedBooks();
    });

  // Írjon további teszteket a többi metódusra...
  
    test('adddBorrower should add a borrower to the library', () => {
        const borrower: Borrower = {Id: 1, dateOfBirth: new Date(1997/11/15), name: 'Kozma istván'};
        library.addBorrower(borrower);

        const borrwers = library.listBorrowers();
        // itt kerestem a mi lehet a hiba de nem jöttem rá. Az index.ts-ben tesztelem is, hogy működik-e az addBorrower és a ListBorrowers metódus és mind a kettő fut is.
    });

    test('removeBook should to remove a book to the Library', () => {
        const book: Book = { Id: 1, title: 'Test Book', author: 'Test Author', category: { name: 'Test Category' }, isBorrowed: false};
        library.addBook(book);

        library.removeBook(book);

        const books = library.listBorrowedBooks();
    });

});
