import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers/index";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./../api/saga/index";

const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
  const store = createStore(
    rootReducer,
    !+process.env.REACT_APP_PRODUCTION &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? compose(
          applyMiddleware(thunk, sagaMiddleware),
          window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
        )
      : applyMiddleware(thunk, sagaMiddleware)
  );
  sagaMiddleware.run(rootSaga);
  return store;
};
export default configureStore;
