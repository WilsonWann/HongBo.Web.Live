import React from 'react'
import styled from 'styled-components';
import { StyledLiveBlock } from './StyledLiveBlock';

export const StyledLiveBlockRow = (props) => {
    return (
        <StyledDiv className={'col' + props.colCount}>
            {
                props.row.map((col, colNumber) => {
                    return (
                        <StyledLiveBlock key={colNumber} image={col.image} flag={col.flag}
                            title={col.title} liveMaster={col.liveMaster} hot={col.hot} />
                    )
                })
            }
        </StyledDiv>
    )
}
const StyledDiv = styled.div`
    position:relative;
    width: 100%;
    height: calc(100% / 3);
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-between;
    &.col1{
        width: 350px;
    }
    &.col2{
        width: 728px;
    }
`
