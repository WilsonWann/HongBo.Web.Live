import React from 'react';
import styled from 'styled-components';
import GetGameName from '../../../../enum/Platform';

export const Game = (props) => {
    const { topGame } = props
    const { PlatformID } = topGame
    const gameName = GetGameName(PlatformID);
    return (
        <StyledDiv gameName={gameName}/>
    )
}

export const StyledDiv = styled.div`
    position: relative;
    min-width: calc(950px / 4);
    height: 100%;
    margin: 0 auto;
    background-image: url(${props => '/assets/images/Android/games_logo_' + props.gameName + '.png'});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    background-size: initial;
    border-right: 2px solid #e2c6a0;
    &:hover{
        background-image: url(${props => '/assets/images/Android/games_logo_' + props.gameName + '_h.png'});
    }
    &:last-child{
        border: none;
    }
`