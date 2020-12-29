import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { StyledButtonRecommendationTB } from './StyledButtonRecommendationTB';

export const StyledButtonRecommendationTBList = () => {

    // const streamRoomList = useSelector(state => state.getStreamRoomListReducer.streamRoomList)
    const streamRoomList = [
    //     {
    //     "RoomID": 62,
    //     "Account": "kfc999",
    //     "NickName": "kfc999",
    //     "Title": "Mario Cart",
    //     "ImagePath": "http://dev-agent-hb.fastbet108.com/service/Resource//images/hongbo/b1852d2e292b4e6a93b5814e06ef0b361185.jpeg",
    //     "GameTypeID": 4,
    //     "PlatformID": 1050,
    //     "needPass": 1
    // }, {
    //     "RoomID": 61,
    //     "Account": "devStreamer001",
    //     "NickName": "devStreamer001",
    //     "Title": "123",
    //     "ImagePath": "http://dev-agent-hb.fastbet108.com/service/Resource//images/hongbo/326b117e041a4dd1b7222f03394774a10235.png",
    //     "GameTypeID": 0,
    //     "PlatformID": 0,
    //     "needPass": 1
    // }
    ]
    const [index, setIndex] = useState(0);
    let streamRoomList_show, selectedRoom;
    // useEffect(() => {
    //     streamRoomList_show = (streamRoomList && streamRoomList.slice(0, 5)) || null;
    //     selectedRoom = streamRoomList_show ? streamRoomList_show[0] : null;
    //     console.log('index: ', index)
    // }, [streamRoomList, index]);
    return (
        <StyledDiv className="Recommendation_thumbnail_list" >
            {
                streamRoomList.map((streamRoom) => {
                    // console.log('streamRoom.RoomID: ', streamRoom.RoomID);
                    // console.log('+streamRoom.RoomID: ', +streamRoom.RoomID);
                    // console.log('+streamRoom.RoomID === +index :' + streamRoom.RoomID === +index)
                    return <StyledButtonRecommendationTB
                        className={+streamRoom.RoomID === +index ? 'selected' : ''}
                        imagePath={streamRoom.ImagePath}
                        key={streamRoom.RoomID} value={+streamRoom.RoomID}
                        setIndex={setIndex} />
                })
            }
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
    position: relative;
    width: 212px;
    height: 538px;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    z-index:1;
`