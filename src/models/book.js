"use strict";
// models/book.ts
Object.defineProperty(exports, "__esModule", { value: true });
;
// Nem ment ahogy gondoltam és utána ahogy újra olvastama  feladatot láttam, hogy megadtadd, hogy interface-t használjunk itt.
/*
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
        return this._title
    };

    set title(newTitle: string) {
        if (newTitle && newTitle.length > 0) {
            this._title = newTitle;
        } else {
            alert ('Nem megfelelő formátumban adta meg a címet. Szöveges formátumban adja meg.')
        }
    };
    get author(): string{
        return this._author
    };

    set author(newAuthor: string) {
        if (newAuthor && newAuthor.length > 0) {
            this._title = newAuthor;
        } else {
            alert ('Nem megfelelő formátumban adta meg a szerzőt. Szöveges formátumban adja meg.')
        }
    };
};
*/ 
