import { ADD_ACTION, LIST_SUCCESS, LIST_ERROR } from '../actions/typeActions'
const initState = {
    data: [],
    error: ''
}

export default ( state = initState, action) => {
    switch (action.type) {
        case ADD_ACTION:
            return {
                ...state,
                data: []
            }

        case LIST_SUCCESS:
            return {
                 ...state,
                 data: action.payload.data
            }
        case LIST_ERROR:
            return {
                ...state,
                data: [],
                error: action.payload.error
            }
        default: return state;
    }
}