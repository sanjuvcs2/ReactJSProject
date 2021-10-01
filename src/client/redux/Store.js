import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import contextReducer from './ContextReducer';
import rootReducer from '../reducers';
import rootSagas from '../sagas';

//const initialState = { context: ContextReducer() };
const initialState = {};
const sagaMiddleware = createSagaMiddleware();
const bootReducers = {
    context: contextReducer,
    ...rootReducer
};

const Store = createStore(
    combineReducers(bootReducers),
    initialState,
    applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSagas);

export default Store;
