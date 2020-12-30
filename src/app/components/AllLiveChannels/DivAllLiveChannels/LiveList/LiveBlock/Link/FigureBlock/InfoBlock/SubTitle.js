import React from 'react'
import styled from 'styled-components'
import { Hot } from '../../../../../../../common/Hot';
import { LiveMaster } from '../../../../../../../common/LiveMaster'

export const SubTitle = (props) => {
    const { liveMaster, hot, type } = props;
    return (
        <StyledDiv>
            <LiveMaster liveMaster={liveMaster} type={type} />
            <Hot hot={hot} type={type} />
        </StyledDiv>
    )
}
const StyledDiv = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 14px;
    justify-content: space-between;
`