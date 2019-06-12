import { combineReducers } from 'redux';
import todos from './todos';
import visibilityfilter from './visibilityfilter';

export default combineReducers({
    todos,
    visibilityfilter
});