import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './../api/saga/index';


const sagaMiddleware = createSagaMiddleware()

const configureStore = () => {
    const store = createStore(
        rootReducer,
        window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_
            ? compose(
                applyMiddleware(thunk, sagaMiddleware),
                window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_()
            )
            : applyMiddleware(thunk, sagaMiddleware)
    )
    sagaMiddleware.run(rootSaga);
    return store;
}
export default configureStore;