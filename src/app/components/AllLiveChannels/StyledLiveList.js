import React from 'react'
import styled from 'styled-components';
import { StyledLiveBlockRow } from './StyledLiveBlockRow';

export const StyledLiveList = (props) => {
    const rows = [
        props.showList.slice(0, 3),
        props.showList.slice(3, 6),
        props.showList.slice(6, 9)
    ]
    return (
        <StyledDiv >
            {
                rows.map((row, rowNumber) => {
                    return row.length > 0
                        ? <StyledLiveBlockRow colCount={row.length} key={rowNumber} row={row} />
                        : null;
                })
            }
        </StyledDiv>
    )
}
const StyledDiv = styled.div`
    position: relative;
    width: 100%;
    height : 806px;
    background-color: transparent;
`