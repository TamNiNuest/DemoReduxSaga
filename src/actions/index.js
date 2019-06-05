import {INCREMENT, DECREMENT} from './actionTypes';

//action increase
export const incrementAction = (step) => {
    return {
        type: INCREMENT,
        step: step
    }
};

//action decrease
export const decrementAction = (step) => {
    return {
        type: DECREMENT,
        step: step
    }
};