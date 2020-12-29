import React from 'react'
import styled from 'styled-components';

export const StyledNavItem = (props) => {
    const { value, currIndex, index, setCurrIndex } = props;

    return (
        <StyledLi onClick={() => setCurrIndex(index)}
            className={currIndex === index ? 'selected' : ''}>{value}</StyledLi>
    )
}

const StyledLi = styled.li`
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
    display: flex;
    justify-content: center;
    align-items: center;
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
