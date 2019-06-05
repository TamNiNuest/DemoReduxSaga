import {INCREMENT, DECREMENT} from '../actions/actionTypes';
import {takeEvery} from 'redux-saga/effects';

function* increment() {
    yield console.log('increment saga')
};

function* decrement() {
    yield console.log('decrement saga')
};

export function* watchIncrement() {
    yield takeEvery(INCREMENT, increment)
}

export function* watchDecrement() {
    yield takeEvery(DECREMENT, decrement)
}