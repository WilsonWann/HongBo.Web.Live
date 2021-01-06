import { combineReducers } from "redux";
import getTopGameReducer from "./GetTopGameReducer";
import getStreamRoomListReducer from "./GetStreamRoomListReducer";
import liveGuestInfoReducer from "./LiveGuestInfoReducer";
import appGetUrlAsyncReducer from "./AppGetUrlAsyncReducer";
import loggerReducer from "./LoggerReducer";

const rootReducer = combineReducers({
  getTopGameReducer: getTopGameReducer,
  getStreamRoomListReducer: getStreamRoomListReducer,
  liveGuestInfoReducer: liveGuestInfoReducer,
  appGetUrlAsyncReducer: appGetUrlAsyncReducer,
  loggerReducer: loggerReducer,
});

export default rootReducer;
