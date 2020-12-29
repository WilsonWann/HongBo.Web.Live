import {
    LIVE_GUEST_INFO_REQUEST,
    LIVE_GUEST_INFO_SUCCESS,
    LIVE_GUEST_INFO_FAIL
} from '../../actions/LiveGuestInfoAction.js';
import { headers } from '../headers';
import * as APIUrl from '../apiList';
import { call, put, select, takeEvery } from 'redux-saga/effects';

const apiUrl = `http://dev-pc-hb.fastbet108.com
${APIUrl.liveGuestInfo}`;

function* liveGuestInfo() {
    try {
        const resp = yield call(fetch, apiUrl, { method: 'POST', heades: headers })
        if (!resp.ok) throw new Error('API error!')
        const result = yield resp.json()
        if (!result.Success) throw new Error('Get data failed!')
        const guestInfo = yield result.Data
        yield put({
            type: LIVE_GUEST_INFO_SUCCESS,
            payload: {
                guestAccount: guestInfo.Account,
                guestToken: guestInfo.Token
            }
        })
    } catch (error) {
        yield put({ type: LIVE_GUEST_INFO_FAIL, payload: error.message })
    }
}

function* checkGuestToken() {
    const guestToken = yield select(state => state.liveGuestInfoReducer.guestToken)
    console.log('guestToken: ', guestToken)
}

function* mySaga() {
    yield takeEvery(LIVE_GUEST_INFO_REQUEST, liveGuestInfo)
}
export default mySaga;