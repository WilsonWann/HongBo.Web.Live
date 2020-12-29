import { all } from "redux-saga/effects"
import GetTopGame from "./GetTopGame";
import GetStreamRoomList from "./GetStreamRoomList";

function* rootSaga() {
    yield all([
        GetTopGame(),
        GetStreamRoomList()
    ])
}

export default rootSaga