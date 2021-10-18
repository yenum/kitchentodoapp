import React from "react"
import './App.css';
import ToDoList from "./ToDoList";
import Todos from "./Todos"
import Header from "./Header"
import './logo.png'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      Todos: Todos
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
    this.setState(prevState => {
        const updatedTodos = prevState.Todos.map(todo => {
            if (todo.id === id) {
              return {
                ...todo,
                completed: !todo.completed
            }
            }
            return todo
        })
        return {
            Todos: updatedTodos
        }
    })
} 
  render() {
    const TodoItem = this.state.Todos.map(item => <ToDoList key ={item.id} item={item} handleChange={this.handleChange}/>)
    return (
      <div className="todo-list">
         <Header />
         {TodoItem}
        
      </div>
    );
  }
  }
 

export default App;
