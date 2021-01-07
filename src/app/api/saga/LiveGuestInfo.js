import {
  LIVE_GUEST_INFO_REQUEST,
  LIVE_GUEST_INFO_SUCCESS,
  LIVE_GUEST_INFO_FAIL,
} from "../../actions/LiveGuestInfoAction.js";
import { headers } from "../headers";
import * as APIUrl from "../apiList";
import { call, put, takeEvery } from "redux-saga/effects";
import { LOGGER_CATCHERROR } from "app/actions/LoggerAction";

const apiUrl = `${APIUrl.liveGuestInfo}`;
function* liveGuestInfo() {
  try {
    const resp = yield call(fetch, apiUrl, { method: "POST", heades: headers });
    if (!resp.ok) throw new Error(resp.statusText);
    const result = yield resp.json();
    if (!result.Success) throw new Error(`${result.Message}(${result.Code})`);
    const guestInfo = yield result.Data;
    yield put({
      type: LIVE_GUEST_INFO_SUCCESS,
      payload: {
        guestAccount: guestInfo.Account,
        guestToken: guestInfo.Token,
      },
    });
  } catch (error) {
    yield put({
      type: LOGGER_CATCHERROR,
      requestType: LIVE_GUEST_INFO_FAIL,
      apiUrl,
      payload: error.message,
    });
  }
}

function* mySaga() {
  yield takeEvery(LIVE_GUEST_INFO_REQUEST, liveGuestInfo);
}
export default mySaga;
