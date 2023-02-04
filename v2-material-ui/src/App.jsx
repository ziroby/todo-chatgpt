import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  Container
} from "@material-ui/core";
import { addTodo } from "./actions";
import { useSelector, useDispatch } from "react-redux";

const useStyles = makeStyles(theme => ({
  form: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  textField: {
    marginRight: theme.spacing(2)
  }
}));

function TodoList() {
  const todos = useSelector(state => state.todos);
  return (
    <List>
      {todos.map(todo => (
        <ListItem key={todo.id}>
          <ListItemText primary={todo.text} />
        </ListItem>
      ))}
    </List>
  );
}

export default function ToDoApp() {
  const classes = useStyles();
  const [todoText, setTodoText] = useState("");
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(addTodo(todoText));
    setTodoText("");
  }

  return (
    <Container>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          label="Todo"
          value={todoText}
          onChange={event => setTodoText(event.target.value)}
          className={classes.textField}
        />
        <Button type="submit" variant="contained">
          Add Todo
        </Button>
      </form>
      <TodoList />
    </Container>
  );
}
