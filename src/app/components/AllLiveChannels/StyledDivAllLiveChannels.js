import React from 'react'
import styled from 'styled-components';
import { StyledLiveList } from './StyledLiveList';
import { StyledNavList } from './StyledNavList';
import { StyledPaging } from './StyledPaging';

export const StyledDivAllLiveChannels = () => {

    const list = ['全部', '直播', '体育', '电竞', '电子', '真人', '棋牌', '高热门度'];
    const gameList = [
        { image: "1", flag: "1" },
        { image: "2", flag: "2" },
        { image: "3", flag: "3" },
        { image: "4", flag: "4" },
        { image: "5", flag: "2" },
        { image: "6", flag: "5" },
        { image: "7", flag: "4" },
        { image: "8", flag: "2" },
        { image: "9", flag: "5" }
    ]
    return (
        <StyledDiv className="AllLiveChannels_bg" >
            <StyledWrapperDiv>
                <StyledNavList list={list} />
                <StyledLiveList gameList={gameList} ></StyledLiveList>
                <StyledPaging></StyledPaging>
            </StyledWrapperDiv>
        </StyledDiv>
    )
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
        content:url(${process.env.PUBLIC_URL + '/assets/images/Android/TITLE_3.png'});
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
    background-image: url(${process.env.PUBLIC_URL + '/assets/images/Android/3_BG.png'});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    padding: 34px 35px 20px;
    box-sizing: border-box;
`
