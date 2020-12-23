import React from 'react'
import styled from 'styled-components';
import { StyledNavButton } from './StyledNav';

export const StyledNavList = (props) => {
    return (
        <StyledDiv>
            {
                props.list.map((title, index) => {
                    return <StyledNavButton key={index} value={title} ></StyledNavButton>
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