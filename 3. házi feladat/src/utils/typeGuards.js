"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeGuards = void 0;
var todoItem_1 = require("../models/todoItem");
var typeGuards;
(function (typeGuards) {
    function typeCheck(item) {
        if (typeof todoItem_1.ToDoItem === "number") {
            console.log('Az id formátuma megfelelő.');
        }
        else {
            console.log('Az id nem megfelelő formátumbban lett megadva. Számokkal adja meg az ID-t.');
        }
        ;
    }
    typeGuards.typeCheck = typeCheck;
})(typeGuards || (exports.typeGuards = typeGuards = {}));
