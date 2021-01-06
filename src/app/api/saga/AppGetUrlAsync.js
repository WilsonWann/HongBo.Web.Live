import {
  APP_GET_URL_ASYNC_REQUEST,
  APP_GET_URL_ASYNC_SUCCESS,
  APP_GET_URL_ASYNC_FAIL,
} from "../../actions/AppGetUrlAsyncAction";
import { headers } from "../headers";
import * as APIUrl from "../apiList";
import { call, put, takeEvery } from "redux-saga/effects";
import * as CryptoJS from "crypto-js";

// const apiUrl = `http://dev-pc-hb.fastbet108.com
// ${APIUrl.getTopGame}`;
const apiUrl = `
${APIUrl.appGetUrlAsync}`;

function* AppGetUrlAsync() {
  try {
    const resp = yield call(fetch, apiUrl, { method: "POST", heades: headers });
    if (!resp.ok) throw new Error("API error!");
    const result = yield resp.json();
    if (!result.Success) throw new Error("Get data failed!");
    const Data = yield result.Data;
    let decryptResult = decrypt(Data);
    yield put({ type: APP_GET_URL_ASYNC_SUCCESS, payload: decryptResult });
  } catch (error) {
    yield put({ type: APP_GET_URL_ASYNC_FAIL, payload: error.message });
  }
}

function decrypt(data) {
  const cryptkey = CryptoJS.enc.Utf8.parse(process.env.REACT_APP_SITE_KEY);
  return JSON.parse(
    CryptoJS.AES.decrypt(data, cryptkey, {
      keySize: 128 / 8,
      iv: cryptkey,
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7,
    }).toString(CryptoJS.enc.Utf8)
  );
}

function* mySaga() {
  yield takeEvery(APP_GET_URL_ASYNC_REQUEST, AppGetUrlAsync);
}
export default mySaga;
