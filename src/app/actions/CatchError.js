export const CatchError = (action, error) =>
    () => {
        console.log('>>> ' + action.name + 'error: ', error)
    }

