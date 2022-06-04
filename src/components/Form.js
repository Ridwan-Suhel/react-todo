import React from "react";
import { PlusIcon } from "@heroicons/react/solid";

const Form = () => {
  return (
    <div>
      <form action="">
        <div className="form-group">
          <input type="text" className="todo-name" />
          <button className="todo-btn" type="submit">
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
