import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import rootSaga from './sagas/rootSaga';
//redux

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import myReducer from './reducers';

//saga
import createSagaMiddleware from 'redux-saga';

//middleware
//hàm này tạo ra 1 middleware nằm giữa actions và reducers trong redux
const sagaMiddleware = createSagaMiddleware();

//tạo store
var store = createStore (
    myReducer,
    applyMiddleware(sagaMiddleware)
);

ReactDOM.render(
    //Provider giúp truy cập store cũng như tất cả những function của nó ở tất cả các component con
    <Provider store = {store}>
        <App />
    </Provider>
    , document.getElementById('root')
);

//chạy saga
sagaMiddleware.run(rootSaga);

serviceWorker.unregister();
