import React from 'react'
import styled from 'styled-components'
import { FigureBlock } from './FigureBlock'

export const Link = (props) => {
    return (
        <StyledA>
            <FigureBlock
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