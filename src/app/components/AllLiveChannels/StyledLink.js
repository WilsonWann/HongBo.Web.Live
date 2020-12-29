import React from 'react'
import styled from 'styled-components'
import { StyledFigureBlock } from './StyledFigure'

export const StyledLink = (props) => {
    return (
        <StyledA>
            <StyledFigureBlock 
            image={props.image} 
            title={props.title} 
            liveMaster={props.liveMaster} 
            hot={props.hot} />
        </StyledA>
    )
}

const StyledA = styled.a`
    position: relative;
    height: 100%;
    width: 100%;
`