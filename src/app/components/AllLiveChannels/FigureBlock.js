import React from 'react'
import styled from 'styled-components'
import { ImageBlock } from './ImageBlock'
import { InfoBlock } from './InfoBlock'

export const FigureBlock = (props) => {
    return (
        <StyledFigure>
            <ImageBlock image={props.image} name="image-block-hover" />
            <InfoBlock title={props.title} liveMaster={props.liveMaster} hot={props.hot} />
        </StyledFigure>
    )
}

const StyledFigure = styled.figure`
    position: relative;
    height: 100%;
    width: 100%;
    margin: 0;
`