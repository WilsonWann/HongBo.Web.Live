import React from 'react'
import styled from 'styled-components'

export const Title = (props) => {
    return (
        <StyledTitle>{props.title}</StyledTitle>
    )
}
export const StyledTitle = styled.div`
    font-size: 16px;
    font-weight: 900;
    text-align: left;
`