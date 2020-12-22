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
    position: relative;
    width: 1174px;
    margin: 40px auto 0;
    text-align: left;
`

export default Logo
