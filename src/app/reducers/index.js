import { combineReducers } from 'redux'
import getTopGameReducer from './GetTopGameReducer'
import getStreamRoomListReducer from './GetStreamRoomListReducer'

const rootReducer = combineReducers({
    getTopGameReducer: getTopGameReducer,
    getStreamRoomListReducer: getStreamRoomListReducer,
})

export default rootReducer