// models/book.ts
/*
export interface Book {
    id: number;
    title: string;
    author: string;
};
*/

class Book {
    readonly id: number;
    private _title: string;
    private _author: string;

    constructor(id: number, title: string, author: string){
        this.id = id;
        this._title = title;
        this._author = author;
    };

    get title(): string{
        return this.title
    };

    set title(newTitle: string) {
        if (newTitle && newTitle.length > 0) {
            this._title = newTitle;
        } else {
            alert ('Nem megfelelő formátumban adta meg a címet. Szöveges formátumban adja meg.')
        }
    };
    get author(): string{
        return this.author
    };

    set author(newAuthor: string) {
        if (newAuthor && newAuthor.length > 0) {
            this._title = newAuthor;
        } else {
            alert ('Nem megfelelő formátumban adta meg a szerzőt. Szöveges formátumban adja meg.')
        }
    };
};