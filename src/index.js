import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const DATA = [
  { id: "todo-0", name: "Marinate Chicken", completed: true },
  { id: "todo-1", name: "Blend Smoothie", completed: false },
  { id: "todo-2", name: "Grocery Shopping", completed: false }
];
ReactDOM.render(
    <App tasks={DATA}/>,
  document.getElementById('root')
);


