export const GET_STREAM_ROOM_LIST_REQUEST = 'GET_STREAM_ROOM_LIST_REQUEST'
export const GET_STREAM_ROOM_LIST_SUCCESS = 'GET_STREAM_ROOM_LIST_SUCCESS'
export const GET_STREAM_ROOM_LIST_FAIL = 'GET_STREAM_ROOM_LIST_FAIL'

export const getStreamRoomList = () => {
    return {
        type: GET_STREAM_ROOM_LIST_REQUEST
    }
}
export const getStreamRoomListSuccess = (streamRoomList) => {
    return {
        type: GET_STREAM_ROOM_LIST_SUCCESS,
        payload: streamRoomList
    }
}
export const getStreamRoomListFail = (errorMessage) => {
    return {
        type: GET_STREAM_ROOM_LIST_FAIL,
        payload: errorMessage
    }
}