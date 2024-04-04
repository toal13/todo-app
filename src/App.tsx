import React, { useState } from 'react';

const ToDoList = () => {
  // Rule: Use meaningful and pronounceable variable names
  // 意味のある変数名を使用
  const [t, sT] = useState([]);
  const [iV, sIV] = useState('');

  // Rule: Use explanatory variables
  // 説明的な変数を使用
  const addTodo = () => {
    // Rule: Avoid Mental Mapping
    // メンタルマッピングの回避
    const isInputValueValid = iV.trim() !== '';
    if (isInputValueValid) {
      // Rule: Use the same vocabulary for the same type of variable
      // 同じタイプの変数には同じ語彙を使用する
      sT([...t, iV]);
      sIV('');
    }
  };

  // Rule: Functions should do one thing
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
      <input
        type="text"
        value={iV}
        onChange={(e) => sIV(e.target.value)}
      />
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
