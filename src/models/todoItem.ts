export class ToDoItem<T> {
    readonly Id: number;
    public content: T;
    protected doDate: Date;

    constructor(id:number, content: T, doDate: Date) {
        this.Id = id;
        this.content = content;
        this.doDate = doDate;
    };
};

