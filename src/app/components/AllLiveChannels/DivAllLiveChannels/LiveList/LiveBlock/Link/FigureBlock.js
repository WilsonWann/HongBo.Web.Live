import React from 'react'
import styled from 'styled-components'
import { ImageBlock } from './FigureBlock/ImageBlock'
import { InfoBlock } from './FigureBlock/InfoBlock'

export const FigureBlock = (props) => {
    return (
        <StyledFigure>
            <ImageBlock image={props.image} name="image-block-hover" />
            <InfoBlock name="info-block-hover"
                title={props.title} 
                liveMaster={props.liveMaster} 
                hot={props.hot}
                type={props.type}
                 />
        </StyledFigure>
    )
}

const StyledFigure = styled.figure`
    position: relative;
    height: 100%;
    width: 100%;
    margin: 0;
`