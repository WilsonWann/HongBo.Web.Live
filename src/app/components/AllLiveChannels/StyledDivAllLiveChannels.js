import React from 'react'
import styled from 'styled-components';

export const StyledDivAllLiveChannels = () => {
    return (
        <StyledDiv className="AllLiveChannels_bg" >
            <StyledInnerDiv>
                <StyledNavList>
                    <StyledNav>全部</StyledNav>
                    <StyledNav>直播</StyledNav>
                    <StyledNav>体育</StyledNav>
                    <StyledNav>电竞</StyledNav>
                    <StyledNav>电子</StyledNav>
                    <StyledNav>真人</StyledNav>
                    <StyledNav>棋牌</StyledNav>
                    <StyledNav>高热门度</StyledNav>
                </StyledNavList>
                <StyledLiveList></StyledLiveList>
                <StyledPaging></StyledPaging>
            </StyledInnerDiv>
        </StyledDiv>
    )
}

const StyledNav = styled.button`
    position: relative;
    width: 102px;
    height : 32px;
    font-size: 16px;
    font-weight: 600;
    color: #724c2f;
    font-family: PingFang-SC;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 16px;
    border: 1px solid #ffefe2;
    cursor: pointer;
    &:hover{
        color: #eb4f2d;
    }
    &:active{
        background-color: rgba(122, 57, 14, 0.26);
        border: 1px solid #e6c9ab;
        color: #442206;
    }
    &:focus{
        outline: none;
    }
`

const StyledNavList = styled.div`
    position: relative;
    width: 100%;
    height : 32px;
    background-color: transparent;
    display: flex;
    justify-content: space-evenly;
`
const StyledLiveList = styled.div`
    position: relative;
    width: 100%;
    height : 800px;
    background-color: lightcoral;
`
const StyledPaging = styled.div`
    position: relative;
    width: 100%;
    height : 50px;
    background-color: lightpink;
`

const StyledInnerDiv = styled.div`
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
