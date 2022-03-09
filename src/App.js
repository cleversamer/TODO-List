import React, { useEffect, useState } from "react";
import {
  Button,
  FormControl,
  Input,
  InputLabel,
  Link,
} from "@material-ui/core";
import Todo from "./components/Todo";
import db from "./firebase";
import { firestore } from "firebase";
import "./css/App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setTodos(
          snapshot.docs.map((doc) => {
            return { id: doc.id, title: doc.data().title };
          })
        );
      });
  }, []);

  const handleDelete = (todoId) => {
    db.collection("todos").doc(todoId).delete();
  };

  const addTodo = (event) => {
    event.preventDefault();
    const title = input.trim();
    db.collection("todos").add({
      title,
      timestamp: firestore.FieldValue.serverTimestamp(),
    });

    setTodos([...todos, title]);
    setInput("");
  };

  return (
    <div className="App">
      <h1>TODO List App 🚀</h1>
      <p>
        Made With ❤️ By{" "}
        <Link href="https://www.twitter.com/ssadawi__" target="__blank">
          Samer A.
        </Link>
      </p>
      <form className="input-box">
        <FormControl>
          <InputLabel>✅ Write a TODO</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.currentTarget.value)}
          />
        </FormControl>
        <Button
          style={{ marginLeft: 10, marginTop: 10 }}
          type="submit"
          onClick={addTodo}
          variant="contained"
          color="primary"
          disabled={!input}
        >
          Add Todo
        </Button>
      </form>

      <Todo todos={todos} onDelete={handleDelete} />
    </div>
  );
}

export default App;
