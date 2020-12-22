import React from 'react'
import styled from 'styled-components';

export const StyledDivPopularGames = () => {
    return (
        <StyledDiv className="PopularGames_bg" />
    )
}

const StyledDiv = styled.div`
    &:before{
        content:url(${process.env.PUBLIC_URL + '/assets/images/Android/TITLE_2.png'});
        position: relative;
        width: 395px;
        height: 84px;
        top: -84px;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: contain;
    }
    position: relative;
    width: 1153px;
    height: 142px;
    margin: 0 auto;
    background-image: url(${process.env.PUBLIC_URL + '/assets/images/Android/2_BG.png'});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
`
