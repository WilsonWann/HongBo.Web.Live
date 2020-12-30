import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { LiveStreamLink } from './DivRecommendation/LiveStreamLink';
import { RecommendationList } from './DivRecommendation/RecommendationList';

export const DivRecommendation = () => {

    const streamRoomList = useSelector(state => state.getStreamRoomListReducer.streamRoomList)
    const [selectedStreamRoom, setSelectedStreamRoom] = useState(streamRoomList && streamRoomList[0]);
    const [selectedRoomID, setSelectedRoomID] = useState(streamRoomList && streamRoomList[0].RoomID)
    useEffect(() => {
        if (streamRoomList && selectedRoomID) {
            setSelectedStreamRoom(streamRoomList.find(streamRoom => streamRoom.RoomID === selectedRoomID))
        }
        if (streamRoomList && !selectedRoomID) {
            setSelectedStreamRoom(streamRoomList[0])
            setSelectedRoomID(streamRoomList[0].RoomID)
        }
    }, [streamRoomList, selectedRoomID]);
    return streamRoomList
        ? (
            <StyledDiv className="Recommendation_bg" >
                <LiveStreamLink
                    selectedStreamRoom={selectedStreamRoom} />
                <RecommendationList
                    streamRoomList={streamRoomList}
                    selectedRoomID={selectedRoomID}
                    setSelectedRoomID={setSelectedRoomID} />
            </StyledDiv >
        )
        : null
}

const StyledDiv = styled.div`
    &:before{
        content:url(${'/assets/images/Android/TITLE_1.png'});
        position: absolute;
        width: 395px;
        height: 84px;
        top: -88px;
        left: 50%;
        transform: translateX(-50%);
        background-position: center center;
        background-repeat: no-repeat;
        background-size: contain;
    }
    &:after{
        content: url(/assets/images/Android/1_BG_frame.png);
        position: absolute;
        width: 1183px;
        height: 563px;
        top: -10px;
        left: 50%;
        transform: translateX(-50%);
        background-repeat: no-repeat;
        background-size: contain;
    }
    position: relative;
    width: 1174px;
    height: 540px;
    margin: 0 auto;
    background-image: url(${'/assets/images/Android/1_BG.png'});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    display: flex;
    padding: 3px 0 1px 4px;
    box-sizing: border-box;
`