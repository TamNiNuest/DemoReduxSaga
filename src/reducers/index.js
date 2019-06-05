import {combineReducers} from 'redux';
import counterReducers from './counterReducers';

//để kết nối reducer với store thì phải combine tất cả các reducer lại
const myReducer = combineReducers ({
    counterReducers
})

export default myReducer;