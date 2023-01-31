const initialState = {
  tasks: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':

      return ({
        ...state,
        tasks: [...state.tasks, action.task]
      });
    case 'REMOVE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.id)
      };
    default:
      return state;
  }
};


export default reducer;
