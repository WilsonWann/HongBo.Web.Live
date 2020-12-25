import React, { useState } from 'react'
import styled from 'styled-components';
import { StyledNavButton } from './StyledNav';

export const StyledNavList = (props) => {

    const [currIndex, setCurrIndex] = useState(0);

    return (
        <StyledDiv>
            {
                props.list.map((title, index) => {
                    return <StyledNavButton setCurrIndex={setCurrIndex} currIndex={currIndex}
                        index={index} key={index} value={title} ></StyledNavButton>
                })
            }
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
    position: relative;
    width: 100%;
    height : 32px;
    background-color: transparent;
    display: flex;
    justify-content: space-evenly;
`