import { useState } from "react";
console.log("Hello world");

const ToDoList = () => {
  // Use meaningful and pronounceable variable names
  // ex. todo, setTodo
  const [t, sT] = useState([]);
  const [iV, sIV] = useState("");
  //Unused variables  remove them if you don't use them
  const [nI, sNI] = useState([]);
  
  // Use explanatory variables
  const addTodo = () => {
    //Avoid Mental Mapping
    const isInputValueValid = iV.trim() !== "";
    if (isInputValueValid) {
      // Use the same vocabulary for the same type of variable
      sT([...t, iV]);
      sIV("");
    }
  };


  // Functions should do one thing
  const removeTodo = (index: number) => {
    // Use default parameters instead of short circuiting or conditionals
    // Bad naming name it more easy to understand ex. updatedTodoList
    const newList = t.filter((_, ind) => ind !== index);
    sT(newList);
  };

  return (
    <div className="">
      <h1>ToDo List</h1>
      <input type="text" value={iV} onChange={(e) => sIV(e.target.value)} />
      <button onClick={addTodo}>Add</button>
      <ul>
        {t.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
