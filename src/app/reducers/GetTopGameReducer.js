import { GET_TOP_GAME_SUCCESS, GET_TOP_GAME_FAIL, GET_TOP_GAME_REQUEST } from './../actions/GetTopGameAction';

const initialState = {
    topGameList: null,
    errorMessage: null
}

const getTopGameReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TOP_GAME_SUCCESS:
            return { ...state, topGameList: action.payload, errorMessage: null }
        case GET_TOP_GAME_FAIL:
            return { ...state, errorMessage: action.payload }
        case GET_TOP_GAME_REQUEST:
        default:
            return { ...state }
    }
}

export default getTopGameReducer