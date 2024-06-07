"use strict";
// models/category.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.Romance = exports.Crime = exports.Category = void 0;
class Category {
    constructor(name) {
        this.name = name;
    }
    ;
}
exports.Category = Category;
;
class Crime extends Category {
    constructor(name, genre) {
        super(name);
        this.genre = genre;
    }
    ;
}
exports.Crime = Crime;
;
class Romance extends Category {
    constructor(name, genre) {
        super(name);
        this.genre = genre;
    }
    ;
}
exports.Romance = Romance;
;
