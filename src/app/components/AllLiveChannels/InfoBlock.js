import React from 'react'
import styled from 'styled-components'
import { SubTitle } from './SubTitle';
import { Title } from './Title'

export const InfoBlock = (props) => {
    const { title, liveMaster, hot } = props;
    return (
        <StyledFigCation className="StyledInfoBlock">
            <Title title={title} />
            <SubTitle liveMaster={liveMaster} hot={hot} />
        </StyledFigCation>
    )
}

const StyledFigCation = styled.figcaption`
    position: relative;
    width: 100%;
    height : 62px;
    line-height: 1;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: #724c2f;
    padding: 12px 16px 12px 20px;
    box-sizing: border-box;
    font-family: PingFang-SC;
`
