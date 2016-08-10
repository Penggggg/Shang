import { observable, computed, autorun, action } from 'mobx';
import { todoItemITF, todoStoreITF } from '../interface/todo.tsx';

class TodoStore implements todoStoreITF {
    @observable todos: todoItemITF[] = [];
    constructor() {

    }

    @computed get report(): string{
        return `Process: ${this.completedTodosCount}/${this.todos.length}`
    }

    @computed get completedTodosCount():number {
        return this.todos.filter(
            todo => todo.completed === true
        ).length;
    }

    @action addTodo(task: string) {
        this.todos.push({
            task: task,
            completed: false,
            assignee: null
        });
    }
}
export const TodoStore$ = new TodoStore();
