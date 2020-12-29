import { combineReducers } from 'redux'
import getTopGameReducer from './GetTopGameReducer'
import getStreamRoomListReducer from './GetStreamRoomListReducer'
import liveGuestInfoReducer from './LiveGuestInfoReducer'

const rootReducer = combineReducers({
    getTopGameReducer: getTopGameReducer,
    getStreamRoomListReducer: getStreamRoomListReducer,
    liveGuestInfoReducer: liveGuestInfoReducer,
})

export default rootReducer