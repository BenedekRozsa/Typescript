//models/borrower.ts
import { Base } from"./book";

export interface Borrower extends Base{
    dateOfBirth?: Date;
    name: string;
};