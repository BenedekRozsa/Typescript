import { ToDoItem } from "../models/todoItem";

export namespace typeGuards {
    export function typeCheck<id>(item: ToDoItem<id> | number) {
        if (typeof ToDoItem<id> === "number") {
            console.log('Az id formátuma megfelelő.');
        } else {
            console.log('Az id nem megfelelő formátumbban lett megadva. Számokkal adja meg az ID-t.');
            
        };
    }
}
