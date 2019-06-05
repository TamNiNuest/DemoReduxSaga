import {INCREMENT, DECREMENT} from '../actions/actionTypes';
import { incrementActionSuccess, decrementActionSuccess } from '../actions';
import {takeEvery, select, put} from 'redux-saga/effects';
//import {all} from 'redux-saga/effects';

const getState = state => state.counterReducers.count;

function* increment() {
    const count = yield select(getState);
    yield put(incrementActionSuccess(count + 1));
    yield console.log('increment saga')
};

function* decrement() {
    const count = yield select(getState);
    yield put(decrementActionSuccess(count - 1));
    yield console.log('decrement saga')
};

//takeEvery thực thi và trả về kết quả của action được gọi
//bỏ vào 1 mảng
//chỉ export default duy nhất 1

export function* watchIncrement() {
    yield takeEvery(INCREMENT, increment)
}

export function* watchDecrement() {
    yield takeEvery(DECREMENT, decrement)
}

// function* wacthCounter () {
//     yield all([
//         takeEvery(INCREMENT, increment),
//         takeEvery(DECREMENT, decrement)
//     ])
// }

// export default wacthCounter;