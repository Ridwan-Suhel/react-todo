import { CheckCircleIcon, TrashIcon } from "@heroicons/react/solid";
import React from "react";

const Todo = ({ setTodos, todos, todo }) => {
  const { id, text } = todo;
  const handleTodoDelete = () => {
    setTodos(todos.filter((el) => el.id !== id));
  };
  return (
    <div className="todo">
      <li>{text}</li>
      <button>
        <CheckCircleIcon className="icon green" />
      </button>
      <button onClick={handleTodoDelete}>
        <TrashIcon className="icon red" />
      </button>
    </div>
  );
};

export default Todo;
