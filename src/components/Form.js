import React from "react";
import { PlusIcon } from "@heroicons/react/solid";

const Form = ({ inputTxt, setInputTxt, setTodos, todos }) => {
  const inputTextHandler = (e) => {
    setInputTxt(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputTxt, completed: false, id: Math.random() * 1000 },
    ]);

    setInputTxt("");
  };
  return (
    <div>
      <form action="">
        <div className="form-group">
          <input
            value={inputTxt}
            onChange={inputTextHandler}
            type="text"
            className="todo-name"
          />
          <button
            className="todo-btn"
            type="submit"
            onClick={submitTodoHandler}
          >
            <PlusIcon className="icon" />
          </button>
          <div className="select">
            <select name="todos" className="filter-todos" id="">
              <option value="all">All</option>
              <option value="completed">Completed</option>
              <option value="uncompleted">Uncompleted</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
