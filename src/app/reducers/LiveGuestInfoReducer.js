import { LIVE_GUEST_INFO_REQUEST, LIVE_GUEST_INFO_SUCCESS, LIVE_GUEST_INFO_FAIL } from './../actions/LiveGuestInfoAction';

const initialState = {
    guestAccount: null,
    guestToken: null,
    errorMessage: null
}

const liveGuestInfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case LIVE_GUEST_INFO_SUCCESS:
            return {
                ...state,
                guestAccount: action.payload.guestAccount,
                guestToken: action.payload.guestToken,
                errorMessage: null
            }
        case LIVE_GUEST_INFO_FAIL:
            return {
                ...state,
                errorMessage: action.payload
            }
        case LIVE_GUEST_INFO_REQUEST:
        default:
            return { ...state }
    }
}

export default liveGuestInfoReducer