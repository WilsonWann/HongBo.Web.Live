import { all } from "redux-saga/effects";
import GetTopGame from "./GetTopGame";
import GetStreamRoomList from "./GetStreamRoomList";
import LiveGuestInfo from "./LiveGuestInfo";
import AppGetUrlAsync from "./AppGetUrlAsync";

function* rootSaga() {
  yield all([
    GetTopGame(),
    GetStreamRoomList(),
    LiveGuestInfo(),
    AppGetUrlAsync(),
  ]);
}

export default rootSaga;
