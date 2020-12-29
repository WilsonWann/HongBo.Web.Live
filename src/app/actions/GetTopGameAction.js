export const GET_TOP_GAME_REQUEST = 'GET_TOP_GAME_REQUEST'
export const GET_TOP_GAME_SUCCESS = 'GET_TOP_GAME_SUCCESS'
export const GET_TOP_GAME_FAIL = 'GET_TOP_GAME_FAIL'

export const getTopGameList = () => {
    return {
        type: GET_TOP_GAME_REQUEST
    }
}
export const getTopGameSuccess = (topGameList) => {
    return {
        type: GET_TOP_GAME_SUCCESS,
        payload: topGameList
    }
}
export const getTopGameListFail = (errorMessage) => {
    return {
        type: GET_TOP_GAME_FAIL,
        payload: errorMessage
    }
}