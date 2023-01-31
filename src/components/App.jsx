// Store setup
import { createStore } from 'redux';
import reducer from '../reducers/todoReducer'
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

  const taskBlock = tasks? (
      <ul>
        {tasks.map(task => (
            <li key={task.id}>
              {task.task}{' '}
              <button onClick={() => dispatch(removeTask(task.id))}>Remove</button>
            </li>
        ))}
      </ul>
  ) : <div>No Tasks</div>

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={task} onChange={e => setTask(e.target.value)} />
        <button type="submit">Add Task</button>
      </form>
      {taskBlock}
    </div>
  );
};

export default TaskList;

