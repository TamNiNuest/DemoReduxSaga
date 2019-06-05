import {INCREMENT, DECREMENT} from '../actions/actionTypes';

//global state
let times = 0;

const counterReducers = (state = times, action) => {
    switch (action.type) {
        case INCREMENT:
            return state + action.step;
        case DECREMENT:
            return state + action.step;
        default:
            return state;
    }
}

export default counterReducers;