"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeGuards = void 0;
/*
export namespace typeGuards {
    export function typeCheck<id>(item: ToDoItem<id> | number) {
        if (typeof ToDoItem<id> === number) {
            console.log('Az id formátuma megfelelő.');
        } else {
            console.log('Az id nem megfelelő formátumbban lett megadva. Számokkal adja meg az ID-t.');
            
        };
    }
}

import { ToDoItem } from "../models/todoItem";

export namespace typeGuards {
    export function typeCheck<Id>(item: ToDoItem<Id> | number) {
        if (typeof item === "number") {
            console.log('Az id formátuma megfelelő.');
        } else {
            console.log('Az id nem megfelelő formátumban lett megadva. Számokkal adja meg az ID-t.');
        }
    };
        export function isString<content>(item: ToDoItem<content> | string) {
        if (typeof item === "string") {
            console.log('A content formátuma megfelelő.');
        } else {
            console.log('A content nem megfelelő formátumban lett megadva. Szöveggel adja meg a content-t.');
        }
    };
}

*/
var typeGuards;
(function (typeGuards) {
    function typeCheck(item) {
        if (typeof item === "number") {
            console.log('Az id formátuma megfelelő.');
        }
        else {
            console.log('Az id nem megfelelő formátumban lett megadva. Számokkal adja meg az ID-t.');
            // Ellenőrizzük a content property-t, ha létezik
            if (item.content && typeof item.content === "string") {
                console.log('A content formátuma megfelelő.');
            }
            else {
                console.log('A content nem megfelelő formátumban lett megadva. String-ként adja meg a content-et.');
            }
        }
    }
    typeGuards.typeCheck = typeCheck;
})(typeGuards || (exports.typeGuards = typeGuards = {}));
