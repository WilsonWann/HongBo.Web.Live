import React from 'react'
import styled from 'styled-components';

export const StyledNavButton = (props) => {
    const { value, currIndex, index,setCurrIndex } = props;

    return (
        <StyledButton onClick={() => setCurrIndex(index)} 
        className={currIndex === index ? 'selected' : ''}>{value}</StyledButton>
    )
}

const StyledButton = styled.button`
    position: relative;
    width: 102px;
    height : 32px;
    font-size: 16px;
    font-weight: 600;
    color: #724c2f;
    font-family: PingFang-SC;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 16px;
    border: 1px solid #ffefe2;
    cursor: pointer;
    &:hover{
        color: #eb4f2d;
    }
    &.selected,
    &:active{
        background-color: rgba(122, 57, 14, 0.26);
        border: 1px solid #e6c9ab;
        color: #442206;
    }
    &:focus{
        outline: none;
    }
`
