export const GET_STREAM_ROOM_LIST_REQUEST = 'GET_STREAM_ROOM_LIST'

export const getStreamRoomList = (streamRoomList) => {
    return {
        type: GET_STREAM_ROOM_LIST_REQUEST,
        payload: streamRoomList
    }
}