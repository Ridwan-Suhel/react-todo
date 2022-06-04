import React from "react";
import { PlusIcon } from "@heroicons/react/solid";

const Form = () => {
  return (
    <div>
      <form action="">
        <input type="text" className="todo-name" />
        <button className="todo-btn" type="submit">
          <PlusIcon className="h-5 w-5 text-blue" />
        </button>
      </form>
    </div>
  );
};

export default Form;
