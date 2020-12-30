import React from 'react'
import styled from 'styled-components'
import { StyledSubInfo } from './StyledSubInfo';

export const Hot = (props) => {
    const { type, hot } = props
    return (
        <StyledHot type={type}>{hot}</StyledHot>
    )
}

export const StyledHot = styled(StyledSubInfo)`
    &:before{
        content: url(${props =>`/assets/images/Android/hot${props.type}.svg`});
    }
`