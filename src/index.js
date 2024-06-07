"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const library_1 = require("./services/library");
const category_1 = require("./models/category");
const library = new library_1.Library();
const romanceCategory = new category_1.Romance('Romantika', 'regény');
const CrimeCategory = new category_1.Romance('Romantika', 'sorozat');
const book1, { id = 1, title = 'Murder on the Nile', author = 'Agatha Christie', category = CrimeCategory };
const book2, { id = 2, title = 'Kate and Leo', author = 'Unknown', category = romanceCategory };
