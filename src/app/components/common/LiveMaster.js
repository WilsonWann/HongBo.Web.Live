import React from 'react'
import styled from 'styled-components'
import { StyledSubInfo } from './StyledSubInfo';

export const LiveMaster = (props) => {
    const { type, liveMaster } = props

    return (
        <StyledLiveMaster type={type}>{liveMaster}</StyledLiveMaster>
    )
}

export const StyledLiveMaster = styled(StyledSubInfo)`
    &:before{
        content:url(${props => process.env.PUBLIC_URL + `/assets/images/Android/user${props.type}.svg`});
    }
`