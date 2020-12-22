import React from 'react'
import styled from 'styled-components';

export const StyledDivAllLiveChannels = () => {
    return (
        <StyledDiv className="AllLiveChannels_bg" />
    )
}

const StyledDiv = styled.div`
    &:before{
        content:url(${process.env.PUBLIC_URL + '/assets/images/Android/TITLE_3.png'});
        position: relative;
        width: 395px;
        height: 84px;
        top: -84px;
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
`
