import { GET_STREAM_ROOM_LIST_REQUEST } from './../actions/GetStreamRoomListAction';

const initialState = {
    streamRoomList: []
}

const getStreamRoomListReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_STREAM_ROOM_LIST_REQUEST:
            return { ...state, streamRoomList: action.payload }

        default:
            return { ...state }
    }
}

export default getStreamRoomListReducer