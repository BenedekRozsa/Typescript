import { Book } from './models/book';
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
});
