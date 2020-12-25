import React from 'react'
import styled from 'styled-components';
import { StyledLogo } from './components/StyledLogo';

const Logo = () => {
    return (
        <StyledGlobalLogo>
            <StyledLogo />
        </StyledGlobalLogo>
    )
}

const StyledGlobalLogo = styled.div`
    position: absolute;
    width: 1174px;
    top: 40px;
    left: 50%;
    transform: translateX(-50%);
    text-align: left;
    z-index: 100;
`

export default Logo
