import React from "react";
import "../css/Todo.css";
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Icon,
} from "@material-ui/core";

function Todo({ todos }) {
  return (
    <List className="todo-list">
      {todos.map((todo) => (
        <ListItem key={todo.timestamp}>
          <ListItemAvatar>
            <Avatar>
              <Icon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={todo.title} secondary="Dummy deadline ⏰" />
        </ListItem>
      ))}
    </List>
  );
}

export default Todo;
