export const Logger = (action, payload = null) =>
    dispatch => {
        dispatch(action(payload));
        console.log('$$$ (' + action.name + ', ' + action().type + ') payload: ', payload)
    }

