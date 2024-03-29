import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import TodoList from '../components/TodoList';
import { Visibility_Filters } from '../actions/types';

const getVisibleTodos =  (todos, filter) => {
    switch (filter) {
        case Visibility_Filters.SHOW_ALL:
            return todos;
        case Visibility_Filters.SHOW_COMPLETED:
            return todos.filter(t => t.completed)
        case Visibility_Filters.SHOW_ACTIVE:
            return todos.filter(t => !t.completed)
        default:
            throw new Error('Unknown filter: '+ filter);
    }
}

const mapStateToProps = state => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);