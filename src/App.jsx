import "./App.css";
import { useEffect, useState } from "react";
import { createTodo, deleteTodo, scanTodos, toggleDone } from "./dynamo";
import Todos from "./components/Todos";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    scanTodos().then(setTodos);
    // Same as line above
    // async function getTodos() {
    //   const todoItems = await scanTodos();
    //   setTodos(todoItems);
    // }
    // getTodos();
  }, []);

  async function handleToggle(todo) {
    const flipped = !todo.completed;
    toggleDone(todo.id, flipped);
    setTodos((prev) =>
      prev.map((item) =>
        item.id === todo.id ? { ...item, completed: flipped } : item
      )
    );
  }

  async function handleDelete(id) {
    await deleteTodo(id);
    setTodos((prev) => prev.filter((item) => item.id != id));
  }

  async function handleAdd() {
    if (!input.trim()) return;
    const newItem = { id: Date.now().toString(), input, completed: false };
    await createTodo(newItem);
    setTodos((prev) => [...prev, newItem]);
    setInput("");
  }

  return (
    <>
      <h1>CRUD - APP</h1>
      <label>
        Add a Todo...
        <input
          type="text"
          name="todo"
          id="todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </label>
      <button onClick={handleAdd}>Add</button>
      <Todos
        todos={todos}
        onHandleDelete={handleDelete}
        onHandleUpdate={handleToggle}
      />
    </>
  );
}

export default App;
