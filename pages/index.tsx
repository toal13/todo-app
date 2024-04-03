import { useState } from "react";

const ToDoList = () => {
  // Use meaningful and pronounceable variable names
  //Use todo,setTodo/ newTodo, setNewTodo
  const [t, sT] = useState([]);
  const [iV, sIV] = useState("");

  // Use explanatory variables
  //
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
  // 関数は一つのことを行う
  const removeTodo = (index: number) => {
    // Rule: Use default parameters instead of short circuiting or conditionals
    // 短絡評価や条件文の代わりにデフォルトパラメータを使用する
    const updatedTodoList = t.filter((_, ind) => ind !== index);
    sT(updatedTodoList);
  };

  return (
    <div>
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
