import { SET_VISIBILITY_FILTER, Visibility_Filters } from '../actions/types'

const visibilityFilter = (state = Visibility_Filters.SHOW_ALL, action ) => {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
}

export default visibilityFilter;