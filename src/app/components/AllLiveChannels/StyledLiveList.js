import React from 'react'
import styled from 'styled-components';
import { StyledLiveBlock } from './StyledLiveBlock';

export const StyledLiveList = (props) => {
    return (
        <StyledDiv>
            {
                props.totalGameList.map((game, index) => {
                    return <StyledLiveBlock key={index} image={game.image} flag={game.flag} title={game.title} liveMaster={game.liveMaster} hot={game.hot} />
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