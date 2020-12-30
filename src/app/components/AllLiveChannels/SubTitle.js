import React from 'react'
import styled from 'styled-components'
import { Hot } from './Hot';
import { LiveMaster } from './LiveMaster'

export const SubTitle = (props) => {
    const { liveMaster, hot } = props;
    return (
        <StyledDiv>
            <LiveMaster liveMaster={liveMaster} type="" />
            <Hot hot={hot} type="" />
        </StyledDiv>
    )
}
const StyledDiv = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 14px;
    justify-content: space-between;
`