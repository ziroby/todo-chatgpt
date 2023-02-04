/*
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

Copyright 2023 Ron "Ziroby" Romero
*/
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

