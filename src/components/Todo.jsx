import React from "react";
import "../css/Todo.css";
import { Button, List, ListItem, ListItemText } from "@material-ui/core";

function Todo({ todos, onDelete }) {
  return (
    <List className="todo-list">
      {todos.map((todo) => (
        <ListItem key={todo.id}>
          <ListItemText primary={todo.title} secondary="Dummy deadline ⏰" />
          <Button
            variant="contained"
            color="secondary"
            onClick={() => onDelete(todo.id)}
          >
            Delete Me
          </Button>
        </ListItem>
      ))}
    </List>
  );
}

export default Todo;
