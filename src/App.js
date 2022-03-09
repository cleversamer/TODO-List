import React, { useState } from "react";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import "./App.css";
import Todo from "./components/Todo";

function App() {
  const [todos, setTodos] = useState([
    "Take dogs for a walk",
    "Take the rubbish out",
    "Qazi wants to livestream today",
  ]);
  const [input, setInput] = useState("");

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, input.trim()]);
    setInput("");
  };

  return (
    <div className="App">
      <h1>TODO App</h1>
      <form>
        <FormControl>
          <InputLabel>✔️ Write a TODO</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.currentTarget.value)}
          />
        </FormControl>

        <Button
          type="submit"
          onClick={addTodo}
          variant="contained"
          color="primary"
          disabled={!input}
        >
          Add Todo
        </Button>
      </form>

      <Todo todos={todos} />
    </div>
  );
}

export default App;
