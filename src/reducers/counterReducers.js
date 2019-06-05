import { INCREMENT, INCREMENT_SUCCESS, DECREMENT, DECREMENT_SUCCESS } from '../actions/actionTypes';

//global state
const intinalState = {
    count: 0
}

const counterReducers = (state = intinalState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
            };
        case INCREMENT_SUCCESS:
            return {
                ...state,
                count: action.step
            }
        case DECREMENT:
            return {
                ...state,  
            };
        case DECREMENT_SUCCESS:
                return {
                    ...state,
                    count: action.step
                }
        default:
            return state;
    }
}

export default counterReducers;