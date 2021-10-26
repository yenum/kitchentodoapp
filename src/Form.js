import React, { useState } from "react";
import Add from "./Add.png"


function Form(props) {

    const [name, setName] = useState("");

    function handleChange(e) {
      setName(e.target.value);
    }
  
    function handleSubmit(e) {
      e.preventDefault();
      props.addTask(name);
      setName("");
    }
    return(
        <form onSubmit={handleSubmit}>
        <h2>
          <label className="text" htmlFor="new-todo-input">
            What needs to be done?
          </label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          name="text"
          autoComplete="off"
          value={name}
          onChange={handleChange}/>
       
        <button type="submit">
          ADD TASK
        </button>

      </form>
    )
}

export default Form;