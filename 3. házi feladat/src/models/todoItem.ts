export class ToDoItem<T> {
    readonly id: number;
    public content: T;
    protected doDate: Date;

    constructor(id:number, content: T, doDate: Date) {
        this.id = id;
        this.content = content;
        this.doDate = doDate;
    };
};

