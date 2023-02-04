import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

const Todo = ({ todo, removeTodo }) => (
  <li>
    {todo.text}
    <IconButton aria-label="delete" onClick={() => removeTodo(todo.id)}>
      <DeleteIcon />
    </IconButton>
  </li>
);

export default Todo;
