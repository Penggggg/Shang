import * as React from 'react';
import { observer } from 'mobx-react';
import { todoItemITF, todoStoreITF, TodoItemComponentPropsITF, TodoComponentPropsITF } from '../../interface/todo.tsx';



@observer
export default class Todo extends React.Component<TodoComponentPropsITF, any> {
    constructor(){
        super()
    }
    render() {
        let { store } = this.props;;
        return (
            <div>
                { store.report }
                <ul>
                    {
                        store.todos.map(
                            (todo:todoItemITF , i: number)=><TodoItem todo={ todo } key={ i } />
                        )
                    }
                </ul>
                <small>double-click to edit</small>
                <button onClick={ this.handleAdd }>add</button>
            </div>
        )
    }
    handleAdd = ()=>{
        let { store } = this.props;
        store.addTodo(
            prompt('Plz Enter a new todo')
        )
    }
}


@observer
class TodoItem extends React.Component<TodoItemComponentPropsITF, any> {
    constructor() {
        super()
    }
    render() {
        let { todo } = this.props;
        return (
            <li onDoubleClick={ this.onRename }>
                <input type="checkbox" checked={ todo.completed }
                    onChange={ this.onToggle }/>
                { todo.task }
            </li>
        )
    }
    onToggle = () => {
        let { todo } = this.props;
        todo.completed = !todo.completed;
    }
    onRename = () => {
        let { todo } = this.props;
        todo.task = prompt(`Task name`, todo.task) || todo.task ;
    }
}
