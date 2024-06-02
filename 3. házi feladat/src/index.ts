import { ToDoItem } from "./models/todoItem";
import { TodoList } from "./services/todoList";
import { typeGuards } from "./utils/typeGuards";


const todo1 = new ToDoItem<string>(1, "Vásárlás", new Date('2024-06-01'));
const todo2 = new ToDoItem<string>(2, "Edzés", new Date('2024.06.08'));
const todo3 = new ToDoItem<string>(3, "Takarítás", new Date('2024.05.18'));
const todo4 = new ToDoItem<string>(4, "Alvás", new Date('2024.11.11'));
const todo5 = new ToDoItem<string>(5, "Futás", new Date('2023.11.04'));

const todoList = new TodoList<string>();
todoList.addItem(todo1);
todoList.addItem(todo2);
todoList.addItem(todo3);
todoList.addItem(todo4);
todoList.addItem(todo5);

console.log(todoList.listAllItems());

todoList.deleteItem(todo1);

console.log(todoList.listAllItems());

let meret = todoList.size;
console.log(meret);

const oneItem = todoList.listOneItem(todo3);
console.log(oneItem);

console.log(typeGuards.typeCheck(todo1));




