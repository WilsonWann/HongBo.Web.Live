import { GET_TOP_GAME_REQUEST } from './../actions/GetTopGameAction';

const initialState = {
    topGameList: []
}

const getTopGameReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TOP_GAME_REQUEST:
            return { ...state, topGameList: action.payload }

        default:
            return { ...state }
    }
}

export default getTopGameReducer