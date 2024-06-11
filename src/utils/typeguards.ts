import { Book } from "../models/book";
import { Crime } from "../models/category";

export function isBook (obj: any): obj is Book {
    return obj && typeof obj.Id === 'number' && typeof obj.title === 'string' && typeof obj.author === 'string' && (typeof obj.isBorrowed === 'boolean' || obj.isBorrowed === undefined);
};

export function isCategories(obj: any): obj is Crime {
    return obj && typeof obj.name === 'string' && typeof obj.genre === 'string'
};
