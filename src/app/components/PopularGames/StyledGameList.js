import React from 'react'
import styled from 'styled-components';
import { StyledGame } from './StyledGame';

export const StyledGameList = (props) => {
    return (
        <StyledDiv>
            {
                props.list.map((gameName) => {
                    return <StyledGame gameName={gameName} />
                })
            }
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
    width: 950px;
    height: 100%;
    background-color: transparent;
    display: flex;
    align-items: center;
    overflow-x: hidden;
`