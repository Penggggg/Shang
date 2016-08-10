/// <reference path="../typings/globals/react/index.d.ts" />
/// <reference path="../typings/globals/react-dom/index.d.ts" />
/// <reference path="../typings/globals/react-router/index.d.ts" />
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var ReactDom = require('react-dom');
var Counter_1 = require('./component/Counter');
var Todo_1 = require('./component/Todo');
var todoStore_1 = require('./stores/todoStore');
var HelloWorld = (function (_super) {
    __extends(HelloWorld, _super);
    function HelloWorld() {
        _super.apply(this, arguments);
    }
    HelloWorld.prototype.render = function () {
        return (React.createElement("div", null, React.createElement("h1", null, "Shang"), React.createElement("hr", null), React.createElement("h1", null, "Count"), React.createElement(Counter_1.default, {count: 5}), " ", React.createElement("hr", null), React.createElement("h1", null, "Todo"), React.createElement(Todo_1.default, {store: todoStore_1.TodoStore$}), React.createElement("hr", null)));
    };
    return HelloWorld;
}(React.Component));
ReactDom.render(React.createElement(HelloWorld, null), document.getElementById('shang'));
//# sourceMappingURL=app.js.map