import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo, toggleTodo } from './actions';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function App() {
  const classes = useStyles();
  const [newTodo, setNewTodo] = React.useState('');
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleTodoAdd = () => {
    dispatch(addTodo(newTodo));
    setNewTodo('');
  };

  return (
    <div className={classes.root}>
      <h1>My To-Do App</h1>
      <TextField
        label="New To-Do"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            handleTodoAdd();
          }
        }}
      />
      <List>
        {todos.map((todo) => (
          <ListItem key={todo.id} dense button>
            <Checkbox
              onClick={() => dispatch(toggleTodo(todo.id))}
              checked={todo.completed}
            />
            <ListItemText primary={todo.text} />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => dispatch(removeTodo(todo.id))}
              >
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default App;
