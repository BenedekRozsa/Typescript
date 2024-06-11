"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isCategories = exports.isBook = void 0;
function isBook(obj) {
    return obj && typeof obj.Id === 'number' && typeof obj.title === 'string' && typeof obj.author === 'string' && (typeof obj.isBorrowed === 'boolean' || obj.isBorrowed === undefined);
}
exports.isBook = isBook;
;
function isCategories(obj) {
    return obj && typeof obj.name === 'string' && typeof obj.genre === 'string';
}
exports.isCategories = isCategories;
;
