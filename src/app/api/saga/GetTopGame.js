import {
  GET_TOP_GAME_REQUEST,
  GET_TOP_GAME_SUCCESS,
  GET_TOP_GAME_FAIL,
} from "../../actions/GetTopGameAction";
import { headers } from "../headers";
import * as APIUrl from "../apiList";
import { call, put, takeEvery } from "redux-saga/effects";
import { LOGGER_CATCHERROR, LOGGER_REQUEST } from "app/actions/LoggerAction";

const apiUrl = `${APIUrl.getTopGame}`;

function* GetTopGame() {
  try {
    const resp = yield call(fetch, apiUrl, { method: "POST", heades: headers });
    if (!resp.ok) throw new Error(resp.statusText);
    const result = yield resp.json();
    if (!result.Success) throw new Error(`${result.Message}(${result.Code})`);
    const topGameList = yield result.Data;
    topGameList.sort((g1, g2) => g2.Count - g1.Count);
    yield put({
      type: LOGGER_REQUEST,
      requestType: GET_TOP_GAME_SUCCESS,
      apiUrl,
      payload: topGameList,
    });
  } catch (error) {
    yield put({
      type: LOGGER_CATCHERROR,
      requestType: GET_TOP_GAME_FAIL,
      apiUrl,
      payload: error.message,
    });
  }
}

function* mySaga() {
  yield takeEvery(GET_TOP_GAME_REQUEST, GetTopGame);
}
export default mySaga;
