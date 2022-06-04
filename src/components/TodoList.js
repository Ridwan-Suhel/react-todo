import React from "react";
import Todo from "./Todo";

const TodoList = ({ setTodos, todos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((todo) => (
          <Todo
            setTodos={setTodos}
            todos={todos}
            todo={todo}
            key={todo.id}
          ></Todo>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
