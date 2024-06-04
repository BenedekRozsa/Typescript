<<<<<<< HEAD:3. házi feladat/src/services/todoList.ts
import { ToDoItem} from "../models/todoItem";


export class TodoList<T> {
    private tasks: Map<number, ToDoItem<T>> = new Map();
    size!: number;
    get: any;

    addItem(item: ToDoItem<T>): void {
        this.tasks.set(item.id, item);
        console.log(`Feladat:`);
    };

    deleteItem(item: ToDoItem<T>): void {
        this.tasks.delete(item.id);
    };

    listAllItems(): Map<number, ToDoItem<T>> {
        return this.tasks;
    };

    listOneItem(item: ToDoItem<T>): ToDoItem<T>{
        return this.tasks.get(item.id);
    };

};



=======
import { ToDoItem} from "../models/todoItem";


export class TodoList<T> {
    private tasks: Map<number, ToDoItem<T>> = new Map();
    size!: number;
    get: any;

    addItem(item: ToDoItem<T>): void {
        this.tasks.set(item.Id, item);
        console.log(`Feladat:`);
    };

    deleteItem(item: ToDoItem<T>): void {
        this.tasks.delete(item.Id);
    };

    listAllItems(): Map<number, ToDoItem<T>> {
        return this.tasks;
    };

    listOneItem(item: ToDoItem<T>): ToDoItem<T>{
        return this.tasks.get(item.Id);
    };

};



>>>>>>> 9a2a5ef (negyedik próba):src/services/todoList.ts
