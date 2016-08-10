export interface todoItemITF {
    task: string;
    completed: boolean,
    assignee?: string
}

export interface todoStoreITF {
    todos: todoItemITF[],
    report: string,
    completedTodosCount: number,
    addTodo(task: string): void
}

export interface TodoItemComponentPropsITF{
    todo: todoItemITF
}

export interface TodoComponentPropsITF{
    store: todoStoreITF
}
