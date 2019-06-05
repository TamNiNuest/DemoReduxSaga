import { INCREMENT, INCREMENT_SUCCESS, DECREMENT, DECREMENT_SUCCESS } from './actionTypes';

//action increase
export const incrementAction = () => {
    return {
        type: INCREMENT
    }
};

export const incrementActionSuccess = (step) => ({
    type: INCREMENT_SUCCESS,
    step: step
});

//action decrease
export const decrementAction = (step) => {
    return {
        type: DECREMENT
    }
};

export const decrementActionSuccess = (step) => ({
    type: DECREMENT_SUCCESS,
    step: step
});