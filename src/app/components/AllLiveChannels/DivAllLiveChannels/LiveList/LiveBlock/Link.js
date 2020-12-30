import React from 'react'
import styled from 'styled-components'
import { FigureBlock } from './Link/FigureBlock'


export const Link = (props) => {
    return (
        <StyledA>
            <FigureBlock
                image={props.image}
                title={props.title}
                liveMaster={props.liveMaster}
                hot={props.hot}
                type={props.type} />
        </StyledA>
    )
}
const LinkStyle = {
    position: 'relative',
    height: '100%',
    width: '100%'
}
const StyledA = styled.a(LinkStyle)