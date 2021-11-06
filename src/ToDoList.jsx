import React, { useState } from "react";

const ToDoList = (props) => {
  const [isEditing, setEditing] = useState(false);
    const [newName, setNewName] = useState('');
    const completedStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }

    function handleChange(e) {
        setNewName(e.target.value);
      }

      function handleSubmit(e) {
        e.preventDefault();
        props.editTask(props.id, newName);
        setNewName("");
        setEditing(false);
      }

    const editingTemplate = (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor={props.id}>
              Edit Task
            </label>
            <input iid={props.id}
               type="text"
               value={newName}
               onChange={handleChange} />
          </div>

          <div>
          <button 
           type="button"
        onClick={() => setEditing(false)}>
             Cancel Editing
                 </button>
            <button type="submit">
              Save New Task
            </button>
          </div>


        </form>
      );
      const viewTemplate = (
        <div className="todo-item">

          
          <div className="checkbox">
              <input
                id={props.id}
                type="checkbox"
                defaultChecked={props.completed}
                onChange={() => props.toggleTaskCompleted(props.id)}/>
              <label style={props.completed ? completedStyle: null} htmlFor={props.id}>
                {props.name}
              </label>
            </div>


            <div className="edit">
            <img src="https://cdn0.iconfinder.com/data/icons/set-app-incredibles/24/Edit-01-256.png" 
            alt="edit" width="20px" height="20px" 
            type="button" 
            onClick={() => setEditing(true)}/>
            
            <img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-trash-outline-256.png" 
            alt="delete" width="20px" height="20px" 
            type="button"    
            onClick={() => props.deleteTask(props.id)}/>
              
            </div>

        </div>
      );
    return ( 
     <li className="todo-item">{isEditing ? editingTemplate : viewTemplate}</li>
)
    
}

export default ToDoList











