export const LIVE_GUEST_INFO_REQUEST = 'LIVE_GUEST_INFO_REQUEST'
export const LIVE_GUEST_INFO_SUCCESS = 'LIVE_GUEST_INFO_SUCCESS'
export const LIVE_GUEST_INFO_FAIL = 'LIVE_GUEST_INFO_FAIL'

export const liveGuestInfo = () => {
    return {
        type: LIVE_GUEST_INFO_REQUEST
    }
}
export const liveGuestInfoSuccess = (guestInfo) => {
    return {
        type: LIVE_GUEST_INFO_SUCCESS,
        payload: guestInfo
    }
}
export const liveGuestInfoFail = (errorMessage) => {
    return {
        type: LIVE_GUEST_INFO_FAIL,
        payload: errorMessage
    }
}