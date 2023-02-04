import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { addTodo } from './actions';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(10),
  },
}));

const App = () => {
  const classes = useStyles();
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div className={classes.root}>
      <h1>My To Do App</h1>
      <AddTodo addTodo={(text) => dispatch(addTodo(text))} />
      <TodoList todos={todos} />
    </div>
  );
};

export default App;
