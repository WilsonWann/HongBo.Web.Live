import React, { useState } from 'react'
import styled from 'styled-components';
import { DirButton } from './DivPopularGames/DirButton';
import { GameList } from './DivPopularGames/GameList';

export const DivPopularGames = (props) => {
    const { topGameList } = props;
    const showNumber = 4;
    const [currIndex, setCurrIndex] = useState(0)


    return topGameList
        ? (
            <StyledDiv className="PopularGames_bg" >
                <DirButton showNumber={showNumber} currIndex={currIndex} setCurrIndex={setCurrIndex} list={topGameList} dir="L"></DirButton>
                <GameList currIndex={currIndex} list={topGameList} />
                <DirButton showNumber={showNumber} currIndex={currIndex} setCurrIndex={setCurrIndex} list={topGameList} dir="R"></DirButton>
            </StyledDiv>
        )
        : null
}


const StyledDiv = styled.div`
    &:before{
        content:url(${'/assets/images/Android/TITLE_2.png'});
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
    background-image: url(${'/assets/images/Android/2_BG.png'});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 29px 50px 26px;
    box-sizing: border-box;
`
