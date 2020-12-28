import { getStreamRoomList } from '../actions/GetStreamRoomListAction';
import { Logger } from '../actions/Logger';
import { headers } from './headers';
import * as APIUrl from './apiList';
import Pagination from './../model/pagination';

const apiUrl = `http://dev-pc-hb.fastbet108.com/
${APIUrl.getStreamRoomList}`;

const GetStreamRoomList = (dispatcher) =>
    fetch(apiUrl, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(Pagination)
    })
        .then(resp => {
            if (!resp.ok) throw new Error('get stream room list error!')
            return resp.json()
        })
        .then(result => {
            if (!result.Success) throw new Error('could not get stream room list!')
            return result.Data
        })
        .then(streamRoomList => {
            dispatcher(Logger(getStreamRoomList, streamRoomList))
        })
        .catch(err => console.log('GetTopGameList error: ', err))


export default GetStreamRoomList;