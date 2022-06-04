import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <h2 className="heading">React Todo list</h2>
      <Form />
      <TodoList />
    </div>
  );
}

export default App;
