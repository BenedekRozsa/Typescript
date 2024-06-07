// models/category.ts

export class Category {
    constructor (public name: string) {};
};

export class Crime extends Category {
    protected genre: string;
    constructor(name: string, genre: string) {
        super(name);
        this.genre = genre;
    };
};

export class Romance extends Category {
    protected genre: string;
    constructor(name: string, genre: string) {
        super(name);
        this.genre = genre;
    };
};