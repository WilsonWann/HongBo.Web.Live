import { all } from "redux-saga/effects"
import GetTopGame from "./GetTopGame";
import GetStreamRoomList from "./GetStreamRoomList";
import LiveGuestInfo from "./LiveGuestInfo";

function* rootSaga() {
    yield all([
        GetTopGame(),
        GetStreamRoomList(),
        LiveGuestInfo()
    ])
}

export default rootSaga