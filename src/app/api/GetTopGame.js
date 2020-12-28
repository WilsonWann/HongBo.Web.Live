import { getTopGameList } from '../actions/GetTopGameAction';
import { Logger } from '../actions/Logger';
import { headers } from './headers';
import * as APIUrl from './apiList';

const apiUrl = `http://dev-pc-hb.fastbet108.com/
${APIUrl.getTopGame}`;


const GetTopGameList = (dispatcher) =>
    fetch(apiUrl, {
        method: 'POST',
        heades: headers
    })
        .then(resp => {
            if (!resp.ok) throw new Error('get top game error!')
            return resp.json()
        })
        .then(result => {
            if (!result.Success) throw new Error('could not get top game!')
            return result.Data
        })
        .then(topGameList => {
            topGameList.sort((g1, g2) => g2.Count - g1.Count)
            dispatcher(Logger(getTopGameList, topGameList))
        })
        .catch(err => console.log('GetTopGameList error: ', err))


export default GetTopGameList;