import { all } from "redux-saga/effects";
import GetTopGame from "./GetTopGame";
import GetStreamRoomList from "./GetStreamRoomList";
import LiveGuestInfo from "./LiveGuestInfo";
import AppGetUrlAsync from "./AppGetUrlAsync";
import Logger from "./Logger";

function* rootSaga() {
  yield all([
    GetTopGame(),
    GetStreamRoomList(),
    LiveGuestInfo(),
    AppGetUrlAsync(),
    Logger(),
  ]);
}

export default rootSaga;
