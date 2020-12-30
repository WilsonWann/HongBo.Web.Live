import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { LiveList } from './DivAllLiveChannels/LiveList';
import { NavList } from './DivAllLiveChannels/NavList';
import { Paging } from './DivAllLiveChannels/Paging';

export const DivAllLiveChannels = () => {
    const streamRoomList = useSelector(state => state.getStreamRoomListReducer.streamRoomList)
    const [showList, setShowList] = useState(streamRoomList && streamRoomList.slice(0, 9));
    const pageSize = 9;
    const navList = ['全部', '直播', '体育', '电竞', '电子', '真人', '棋牌', '高热门度'];
    useEffect(() => {
        if (streamRoomList) {
            setShowList(streamRoomList.slice(0, 9))
        }
    }, [streamRoomList]);
    return streamRoomList
        ? (
            <StyledDiv className="AllLiveChannels_bg" >
                <StyledWrapperDiv>
                    <NavList list={navList} />
                    <LiveList showList={showList} ></LiveList>
                    <Paging streamRoomList={streamRoomList} setShowList={setShowList} pageSize={pageSize}></Paging>
                </StyledWrapperDiv>
            </StyledDiv>
        )
        : null
}

const StyledWrapperDiv = styled.div`
    position: relative;
    width: 100%;
    height : 100%;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const StyledDiv = styled.div`
    &:before{
        content:url(${'/assets/images/Android/TITLE_3.png'});
        position: absolute;
        width: 395px;
        height: 84px;
        top: -84px;
        left: 50%;
        transform: translateX(-50%);
        background-position: center center;
        background-repeat: no-repeat;
        background-size: contain;
    }
    position: relative;
    width: 1176px;
    height: 971px;
    margin: 0 auto;
    background-image: url(${'/assets/images/Android/3_BG.png'});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    padding: 34px 35px 20px;
    box-sizing: border-box;
`
