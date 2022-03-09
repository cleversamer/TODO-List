import React from "react";
import "../css/Todo.css";
import { Button, List, ListItem, ListItemText } from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

function Todo({ todos, onDelete }) {
  return (
    <List className="todo-list">
      {todos.map((todo) => (
        <ListItem key={todo.id} className="todo-list-item">
          <ListItemText primary={todo.title} secondary="Dummy deadline ⏰" />
          <Button
            variant="contained"
            color="secondary"
            onClick={() => onDelete(todo.id)}
          >
            <DeleteForeverIcon fontSize="small" style={{ marginRight: 3 }} />
            Delete Me
          </Button>
        </ListItem>
      ))}
    </List>
  );
}

export default Todo;
