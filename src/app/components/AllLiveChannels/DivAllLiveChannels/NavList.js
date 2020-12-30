import React, { useState } from 'react'
import styled from 'styled-components';
import { NavItem } from './NavList/NavItem';

export const NavList = (props) => {

    const [currIndex, setCurrIndex] = useState(0);

    return (
        <StyledUl>
            {
                props.list.map((title, index) => {
                    return <NavItem setCurrIndex={setCurrIndex} currIndex={currIndex}
                        index={index} key={index} value={title} ></NavItem>
                })
            }
        </StyledUl>
    )
}

const StyledUl = styled.ul`
    position: relative;
    width: 100%;
    height : 32px;
    background-color: transparent;
    display: flex;
    justify-content: space-evenly;
    margin: 0;
    padding: 0;
    list-style-type: none;

`