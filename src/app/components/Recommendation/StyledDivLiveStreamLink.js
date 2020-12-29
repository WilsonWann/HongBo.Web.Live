import React from 'react';
import styled from 'styled-components';

export const StyledDivLiveStreamLink = (props) => {
    const { selectedStreamRoom } = props
    return selectedStreamRoom
        ? (
            <StyledA>
                <StyledDiv imagePath={selectedStreamRoom.ImagePath} />
            </StyledA>
        )
        : null
}
const StyledA = styled.a`
    position: relative;
    width: 960px;
    height: 538px;
`
const StyledDiv = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    background-image: url(${props => props.imagePath});
    background-color: #ffffff;
    background-size: cover;
    background-repeat: no-repeat;
    display: inline-block;
`