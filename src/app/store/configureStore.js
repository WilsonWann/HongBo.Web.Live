import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './../api/saga/index';


const sagaMiddleware = createSagaMiddleware()

const configureStore = () => {
    const store = createStore(
        rootReducer,
        compose(
            applyMiddleware(thunk, sagaMiddleware),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    )
    sagaMiddleware.run(rootSaga);
    return store;
}
export default configureStore;