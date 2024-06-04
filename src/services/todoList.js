"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoList = void 0;
var TodoList = /** @class */ (function () {
    function TodoList() {
        this.tasks = new Map();
    }
    TodoList.prototype.addItem = function (item) {
        this.tasks.set(item.Id, item);
        console.log("Feladat:");
    };
    ;
    TodoList.prototype.deleteItem = function (item) {
        this.tasks.delete(item.Id);
    };
    ;
    TodoList.prototype.listAllItems = function () {
        return this.tasks;
    };
    ;
    TodoList.prototype.listOneItem = function (item) {
        return this.tasks.get(item.Id);
    };
    ;
    return TodoList;
}());
exports.TodoList = TodoList;
;
