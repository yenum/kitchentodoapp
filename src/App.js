import React, { useState } from "react";
import './App.css';
import ToDoList from "./ToDoList";
import Form from "./Form"
import { nanoid } from "nanoid";
import Header from "./Header";


function App(props) {

  const [tasks, setTasks] = useState(props.tasks);

  function addTask(name) {
    const newTask = { id: "todo-" + nanoid(), name: name, completed: false };
    setTasks([...tasks, newTask]);
  }

  function editTask(id, newName) {
    const editedTaskList = tasks.map(task => {
      if (id === task.id) {
        return {...task, name: newName}
      }
      return task;
    });
    setTasks(editedTaskList);
  }

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map(task => {
      if (id === task.id) {
        return {...task, completed: !task.completed}
      }
      return task;
    });
    setTasks(updatedTasks);
  
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter(task => id !== task.id);
  setTasks(remainingTasks);
  }

  const taskList = tasks.map(task => (
    <ToDoList
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
      editTask={editTask}
    />
  )
);
  return (
    <div className="todo-list">
      
      <Header/>

      <Form addTask={addTask}/>
      
      <ul aria-labelledby="list-heading" >
        <div>
        <p>{taskList}</p>
        </div>
      </ul>
    </div>
  );
}

 export default App
