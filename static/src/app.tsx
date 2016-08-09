/// <reference path="../typings/globals/react/index.d.ts" />
/// <reference path="../typings/globals/react-dom/index.d.ts" />
/// <reference path="../typings/globals/react-router/index.d.ts" />



import * as React from 'react';
import * as ReactDom from 'react-dom';
import * as ReactRouter from 'react-router';
import Counter from './component/Counter';
import Todo from './component/Todo';
import { TodoStore$ } from './stores/todoStore';


class HelloWorld extends React.Component<any, any>{
    render() {
        return (
            <div>
                <h1>Shang</h1><hr/>
                <h1>Count</h1>
                <Counter count={ 5 } /> <hr/>
                <h1>Todo</h1>
                <Todo store={ TodoStore$ } /><hr/>
            </div>
        )
    }
}

ReactDom.render(
    <HelloWorld />,
    document.getElementById('shang')
)
