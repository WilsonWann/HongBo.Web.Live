import { combineReducers } from "redux";
import getTopGameReducer from "./GetTopGameReducer";
import getStreamRoomListReducer from "./GetStreamRoomListReducer";
import liveGuestInfoReducer from "./LiveGuestInfoReducer";
import appGetUrlAsyncReducer from "./AppGetUrlAsyncReducer";

const rootReducer = combineReducers({
  getTopGameReducer: getTopGameReducer,
  getStreamRoomListReducer: getStreamRoomListReducer,
  liveGuestInfoReducer: liveGuestInfoReducer,
  appGetUrlAsyncReducer: appGetUrlAsyncReducer,
});

export default rootReducer;
