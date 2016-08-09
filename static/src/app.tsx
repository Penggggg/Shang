/// <reference path="../typings/globals/react/index.d.ts" />
/// <reference path="../typings/globals/react-dom/index.d.ts" />
/// <reference path="../typings/globals/react-router/index.d.ts" />



import * as React from 'react';
import * as ReactDom from 'react-dom';
import * as ReactRouter from 'react-router';

class HelloWorld extends React.Component<any, any>{
    render() {
        return (
            <div>
                <h1>121233</h1>
            </div>
        )
    }
}

ReactDom.render(
    <HelloWorld />,
    document.getElementById('shang')
)
