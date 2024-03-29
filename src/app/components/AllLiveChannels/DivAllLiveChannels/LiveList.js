import React from 'react'
import styled from 'styled-components';
import { LiveBlock } from './LiveList/LiveBlock';

export const LiveList = (props) => {
    const { showList } = props
    return showList
        ? (
            <StyledUl>
                {
                    showList.map((streamRoom) =>
                        <LiveBlock key={streamRoom.RoomID} streamRoom={streamRoom} />)
                }
            </StyledUl>
        )
        : null
}
const StyledUl = styled.ul`
    position: relative;
    width: 100%;
    height : 806px;
    background-color: transparent;
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    list-style-type: none;
    justify-content: start;
    align-content: start;
`