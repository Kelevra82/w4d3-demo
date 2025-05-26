import "./App.css";
import { useEffect, useState } from "react";
import { createTodo, scanTodos } from "./dynamo";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    scanTodos().then(setTodos);
  }, []);

  async function handleAdd() {
    const newItem = { id: Date.now().toString(), input, completed: false };
    await createTodo(newItem);
    setTodos((prev) => [...prev, newItem]);
    setInput("");
  }

  return (
    <>
      <h1>Todo App</h1>
      <label>
        Add a Todo...
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </label>
      <button onClick={handleAdd}>Add</button>

      <ul>
        {todos.map((todoItem) => (
          <li key={todoItem.id}>{todoItem.input}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
