import {
  GET_STREAM_ROOM_LIST_REQUEST,
  GET_STREAM_ROOM_LIST_SUCCESS,
  GET_STREAM_ROOM_LIST_FAIL,
} from "../../actions/GetStreamRoomListAction";
import { headers } from "../headers";
import * as APIUrl from "../apiList";
import { call, put, select, takeEvery } from "redux-saga/effects";
import Pagination from "../../model/pagination";
import { LIVE_GUEST_INFO_SUCCESS } from "../../actions/LiveGuestInfoAction";
import { LOGGER_CATCHERROR, LOGGER_REQUEST } from "app/actions/LoggerAction";

const apiUrl = `${APIUrl.getStreamRoomList}`;

function* GetStreamRoomList() {
  try {
    const guestToken = yield select(
      (state) => state.liveGuestInfoReducer.guestToken
    );
    const body = { Authorization: guestToken, ...Pagination };
    const resp = yield call(fetch, apiUrl, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body),
    });
    if (!resp.ok) throw new Error(resp.statusText);
    const result = yield resp.json();
    if (!result.Success) throw new Error(`${result.Message}(${result.Code})`);
    const streamRoomList = yield result.Data;
    const liveStreamRoomList = streamRoomList.filter(
      (streamRoom) => streamRoom.GameTypeID === 0
    );
    liveStreamRoomList &&
      liveStreamRoomList.length > 0 &&
      liveStreamRoomList.forEach(
        (liveStreamRoom) => (liveStreamRoom.GameTypeID = 99)
      );
    yield put({ type: GET_STREAM_ROOM_LIST_SUCCESS, payload: streamRoomList });
    yield put({
      type: LOGGER_REQUEST,
      requestType: GET_STREAM_ROOM_LIST_SUCCESS,
      apiUrl,
      payload: streamRoomList,
    });
  } catch (error) {
    yield put({
      type: LOGGER_CATCHERROR,
      requestType: GET_STREAM_ROOM_LIST_FAIL,
      apiUrl,
      payload: error.message,
    });
  }
}
function* checkGuestToken() {
  yield put({ type: GET_STREAM_ROOM_LIST_REQUEST });
}
function* mySaga() {
  yield takeEvery(LIVE_GUEST_INFO_SUCCESS, checkGuestToken);
  yield takeEvery(GET_STREAM_ROOM_LIST_REQUEST, GetStreamRoomList);
}
export default mySaga;
