import {
  LOGGER_REQUEST,
  LOGGER_SUCCESS,
  // LOGGER_FAIL,
  LOGGER_CATCHERROR,
} from "../../actions/LoggerAction";
// import { headers } from "../headers";
// import * as APIUrl from "../apiList";
import {
  // call,
  put,
  select,
  takeEvery,
} from "redux-saga/effects";

// const apiUrl = `${APIUrl.logger}`;

function* Logger(action = null) {
  const { requestType, apiUrl, payload } = action;
  let loggerID = yield select((state) => state.loggerReducer.loggerID);
  const log = `ID: ${loggerID}, API: ${JSON.stringify(
    apiUrl
  )}, action type: ${JSON.stringify(requestType)}, payload: ${JSON.stringify(
    payload
  )}`;
  yield put({
    type: LOGGER_SUCCESS,
    payload: {
      loggerID: ++loggerID,
      log,
    },
  });
  yield put({
    type: requestType,
    payload: payload,
  });
}

function* errorLogger(action = null) {
  const { type, requestType, apiUrl, payload } = action;
  const errorMessage = `Error: ${payload}`;
  yield Logger({
    type,
    requestType,
    apiUrl,
    payload: errorMessage,
  });
}

function* mySaga() {
  yield takeEvery(LOGGER_REQUEST, Logger);
  yield takeEvery(LOGGER_CATCHERROR, errorLogger);
}
export default mySaga;
