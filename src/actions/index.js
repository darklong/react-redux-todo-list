import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, visibilityFilters } from './types';

let nextTodoId = 1;
export const addTodo = text =>({type: ADD_TODO, id: nextTodoId++, text});
export const toggleTodo = index => ({type: TOGGLE_TODO, index});
export const setVisibilityFilter = filter => ({type: SET_VISIBILITY_FILTER, filter});