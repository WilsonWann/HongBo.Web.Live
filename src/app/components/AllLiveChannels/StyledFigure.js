import React from 'react'
import styled from 'styled-components'
import { StyledImageBlock } from './StyledImageBlock'
import { StyledInfoBlock } from './StyledInfoBlock'

export const StyledFigureBlock = (props) => {
    return (
        <StyledFigure>
            <StyledImageBlock image={props.image} name="image-block-hover" />
            <StyledInfoBlock title={props.title} liveMaster={props.liveMaster} hot={props.hot} />
        </StyledFigure>
    )
}

const StyledFigure = styled.figure`
    position: relative;
    height: 100%;
    width: 100%;
    margin: 0;
`