import React from 'react'
import styled from 'styled-components';
import { Game } from './Game';

export const GameList = (props) => {
    const { list, currIndex } = props;
    return list
        ? (
            <StyleWrapperDiv>
                <StyledDiv style={{ 'transform': `translateX(calc((-950px / 4 - 2px) * ${currIndex}))` }}>
                    {
                        list.map((topGame, index) => {
                            return <Game key={index} topGame={topGame} />
                        })
                    }
                </StyledDiv>
            </StyleWrapperDiv>
        )
        : null
}

const StyleWrapperDiv = styled.div`
    width: 950px;
    height: 100%;
    background-color: transparent;
    overflow: hidden;
`
const StyledDiv = styled.div`
    width: 100%;
    height: 100%;
    background-color: transparent;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    transition: transform 0.3s ease-in-out;
`