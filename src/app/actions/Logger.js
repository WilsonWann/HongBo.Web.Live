export const Logger = (action, content) => {
    return dispatch => {
        dispatch(action(content));
        console.log('$$$ ' + action + ' : ', content)
    }
}
