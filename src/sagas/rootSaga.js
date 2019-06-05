import {all} from 'redux-saga/effects';
import {watchIncrement, watchDecrement} from './counterSagas';

//chạy tất cả các saga
function* rootSaga() {
    yield all([
        watchIncrement(),
        watchDecrement()
    ])
}

export default rootSaga;