// actions.js

// Action types
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

// Action creators
export function addTodo(text) {
    return {
        type: ADD_TODO,
        text
    };
}

export function toggleTodo(index) {
    return {
        type: TOGGLE_TODO,
        index
    };
}
