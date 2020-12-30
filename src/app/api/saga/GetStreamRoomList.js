import {
    GET_STREAM_ROOM_LIST_REQUEST,
    GET_STREAM_ROOM_LIST_SUCCESS,
    GET_STREAM_ROOM_LIST_FAIL,
} from '../../actions/GetStreamRoomListAction';
import { headers } from '../headers';
import * as APIUrl from '../apiList';
import { call, put, takeEvery } from 'redux-saga/effects';
import Pagination from '../../model/pagination';

// const apiUrl = `http://dev-pc-hb.fastbet108.com
// ${APIUrl.getStreamRoomList}`;
const apiUrl = `
${APIUrl.getStreamRoomList}`;

function* GetStreamRoomList() {
    try {
        const resp = yield call(fetch, apiUrl, { method: 'POST', headers: headers, body: JSON.stringify(Pagination) })
        if (!resp.ok) throw new Error('API error!')
        const result = yield resp.json()
        if (!result.Success) throw new Error('Get data failed!')
        const streamRoomList = yield result.Data
        yield put({ type: GET_STREAM_ROOM_LIST_SUCCESS, payload: streamRoomList })
    } catch (error) {
        yield put({ type: GET_STREAM_ROOM_LIST_FAIL, payload: error.message })
    }
}
function* mySaga() {
    yield takeEvery(GET_STREAM_ROOM_LIST_REQUEST, GetStreamRoomList)
}
export default mySaga;