import React from 'react'
import styled from 'styled-components'
import { StyledHot } from '../../../common/Hot'
import { StyledLiveMaster } from '../../../common/LiveMaster'
import { StyledTitle } from '../../../common/Title'

export const InfoDiv = (props) => {
    const { title, liveMaster, hot } = props
    return (
        <StyledDiv>
            <StyledTitleInfo>{title}</StyledTitleInfo>
            <StyledLiveMasterInfo type={'_r'}>{liveMaster}</StyledLiveMasterInfo>
            <StyledHotInfo type={'_r'}>{hot}</StyledHotInfo>
        </StyledDiv>
    )
}


const StyledTitleInfo = styled(StyledTitle)`
    font-size: 19.5px;
    font-weight: 900;
    color: #ffffff;
    line-height:1;
`
const StyledLiveMasterInfo = styled(StyledLiveMaster)`
    text-align:left;
    font-size: 16px;
    color: #ffffff;
    line-height:1;
`
const StyledHotInfo = styled(StyledHot)`
    text-align:left;
    font-size: 16px;
    color: #ffffff;
    line-height:1;
`

const StyledDiv = styled.div`
    position: absolute;
    top: 35px;
    left: 28px;
    padding-left: 9px;
    height: 76px;
    width: auto;
    border-left: 3px solid #daab78;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`