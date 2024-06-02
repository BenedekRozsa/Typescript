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



