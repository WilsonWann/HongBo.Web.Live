import React from 'react'
import styled from 'styled-components';
import { StyledGame } from './StyledGame';

export const StyledGameList = (props) => {
    const { list, currIndex } = props;
    // console.log('list: ',list)
    return (
        <StyleWrapperDiv>
            <StyledDiv style={{ 'transform': `translateX(calc((-950px / 4 - 2px) * ${currIndex}))` }}>
                {
                    props.list.map((gameName, index) => {
                        return <StyledGame key={index} gameName={gameName} />
                    })
                }
            </StyledDiv>
        </StyleWrapperDiv>
    )
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