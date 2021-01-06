import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/index";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./../api/saga/index";
import logger from "redux-logger";

const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
  const store = createStore(
    rootReducer,
    !+process.env.REACT_APP_PRODUCTION &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? compose(
          applyMiddleware(sagaMiddleware, logger),
          window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
        )
      : applyMiddleware(sagaMiddleware, logger)
  );
  sagaMiddleware.run(rootSaga);
  return store;
};
export default configureStore;
