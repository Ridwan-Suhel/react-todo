import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputTxt, setInputTxt] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");

  // 1.33 mnt
  const [filteredTodos, setFilteredTodos] = useState([]);
  // console.log(todos);
  return (
    <div className="App">
      <h2 className="heading">React Todo list</h2>
      <div className="container">
        <Form
          todos={todos}
          setTodos={setTodos}
          inputTxt={inputTxt}
          setInputTxt={setInputTxt}
          setStatus={setStatus}
        />
        <TodoList setTodos={setTodos} todos={todos} />
      </div>
    </div>
  );
}

export default App;
