import React from 'react'
import styled from 'styled-components';
import { StyledLiveBlock } from './StyledLiveBlock';

export const StyledLiveList = (props) => {
    return (
        <StyledDiv>
            {
                props.gameList.map(game => {
                    return <StyledLiveBlock image={game.image} flag={game.flag} />
                })
            }
        </StyledDiv>
    )
}
const StyledDiv = styled.div`
    position: relative;
    width: 100%;
    height : 806px;
    background-color: transparent;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-between;
`