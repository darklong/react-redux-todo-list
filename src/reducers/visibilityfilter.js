import { SET_VISIBILITY_FILTER, visibilityFilters } from '../actions/types'

const visibilityfilter = (state = visibilityFilters.SHOW_ALL, action ) => {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
}

export default visibilityfilter;