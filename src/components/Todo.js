import { CheckCircleIcon, TrashIcon } from "@heroicons/react/solid";
import React from "react";

const Todo = ({ todo }) => {
  const { text } = todo;
  return (
    <div className="todo">
      <li>{text}</li>
      <button>
        <CheckCircleIcon className="icon green" />
      </button>
      <button>
        <TrashIcon className="icon red" />
      </button>
    </div>
  );
};

export default Todo;
