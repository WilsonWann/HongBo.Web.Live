export const GET_TOP_GAME_REQUEST = 'GET_TOP_GAME'

export const getTopGameList = (topGameList) => {
    return {
        type: GET_TOP_GAME_REQUEST,
        payload: topGameList
    }
}