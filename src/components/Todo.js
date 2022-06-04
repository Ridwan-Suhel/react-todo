import { CheckCircleIcon, TrashIcon, StopIcon } from "@heroicons/react/solid";
import React from "react";

const Todo = ({ setTodos, todos, todo }) => {
  const { id, text, completed } = todo;
  const handleTodoDelete = () => {
    setTodos(todos.filter((el) => el.id !== id));
  };
  const handleTodoComplete = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  console.log(completed);
  return (
    <div className="todo">
      <li className={`${completed ? "completed" : ""}`}>{text}</li>
      <button onClick={handleTodoComplete}>
        {completed === false ? (
          <CheckCircleIcon className="icon green" />
        ) : (
          <StopIcon className="icon green"></StopIcon>
        )}
      </button>
      <button onClick={handleTodoDelete}>
        <TrashIcon className="icon red" />
      </button>
    </div>
  );
};

export default Todo;
