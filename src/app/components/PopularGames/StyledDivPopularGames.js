import React, { useState } from 'react'
import styled from 'styled-components';
import { StyledDirButton } from './StyledDirButton';
import { StyledGameList } from './StyledGameList';

export const StyledDivPopularGames = () => {
    const [list] = useState(['AG', 'FB', 'BG', 'MG', 'AG']);
    return (
        <StyledDiv className="PopularGames_bg" >
            <StyledDirButton dir="L"></StyledDirButton>
            <StyledGameList list={list} />
            <StyledDirButton dir="R"></StyledDirButton>
        </StyledDiv>
    )
}


const StyledDiv = styled.div`
    &:before{
        content:url(${process.env.PUBLIC_URL + '/assets/images/Android/TITLE_2.png'});
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
    width: 1153px;
    height: 142px;
    margin: 0 auto;
    background-image: url(${process.env.PUBLIC_URL + '/assets/images/Android/2_BG.png'});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 29px 50px 26px;
    box-sizing: border-box;
`