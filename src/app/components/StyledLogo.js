import React from 'react'
import styled from 'styled-components';

export const StyledLogo = () => {
    return (
        <StyledImg src="/assets/images/Android/HB-logo.png" alt="鸿博直播" title="鸿博直播" />
    )
}

const StyledImg = styled.img`
position:relative;
width: 213px;
height: 39px;
background-repeat: no-repeat;
background-size: contain;
cursor: pointer;
z-index: 100;
`
