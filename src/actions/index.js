import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, Visibility_Filters } from './types';

let nextTodoId = 0;
export const addTodo = text =>({type: ADD_TODO, id: nextTodoId++, text});
export const toggleTodo = id => ({type: TOGGLE_TODO, id});
export const setVisibilityFilter = filter => ({type: SET_VISIBILITY_FILTER, filter});