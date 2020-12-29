import { getTopGameList, getTopGameSuccess, getTopGameListFail } from '../../actions/GetTopGameAction';
import { Logger } from '../../actions/Logger';
import { CatchError } from '../../actions/CatchError';
import { headers } from '../headers';
import * as APIUrl from '../apiList';

const apiUrl = `http://dev-pc-hb.fastbet108.com
${APIUrl.getTopGame}`;


const GetTopGame = () => (dispatcher) => {
    dispatcher(Logger(getTopGameList))
    return fetch(apiUrl, {
        method: 'POST',
        heades: headers
    })
        .then(resp => {
            if (!resp.ok) {
                dispatcher(Logger(getTopGameListFail))
                throw new Error('get top game error!')
            }
            return resp.json()
        })
        .then(result => {
            if (!result.Success) {
                dispatcher(Logger(getTopGameListFail))
                throw new Error('could not get top game!')
            }
            return result.Data
        })
        .then(topGameList => {
            topGameList.sort((g1, g2) => g2.Count - g1.Count)
            dispatcher(Logger(getTopGameSuccess, topGameList))
        })
        .catch(err => dispatcher(CatchError(getTopGameList, err)))
}


export default GetTopGame;