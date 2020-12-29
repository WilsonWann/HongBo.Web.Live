import { GET_STREAM_ROOM_LIST_FAIL, GET_STREAM_ROOM_LIST_REQUEST, GET_STREAM_ROOM_LIST_SUCCESS } from './../actions/GetStreamRoomListAction';

const initialState = {
    streamRoomList: null,
    errorMessage: null
}

const getStreamRoomListReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_STREAM_ROOM_LIST_SUCCESS:
            return { ...state, streamRoomList: action.payload, errorMessage: null }
        case GET_STREAM_ROOM_LIST_FAIL:
            return { ...state, errorMessage: action.payload }
        case GET_STREAM_ROOM_LIST_REQUEST:
        default:
            return { ...state }
    }
}

export default getStreamRoomListReducer