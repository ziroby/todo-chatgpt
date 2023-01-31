// Store setup
import { createStore } from 'redux';

const initialState = {
  tasks: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...state.tasks, action.task]
      };
    case 'REMOVE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.id)
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

// Actions
const addTask = task => ({
  type: 'ADD_TASK',
  task
});

const removeTask = id => ({
  type: 'REMOVE_TASK',
  id
});

// React component
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const TaskList = () => {
  const [task, setTask] = useState('');
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addTask({ id: Date.now(), task }));
    setTask('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={task} onChange={e => setTask(e.target.value)} />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.task}{' '}
            <button onClick={() => dispatch(removeTask(task.id))}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;

