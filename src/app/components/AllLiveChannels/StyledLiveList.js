import React from 'react'
import styled from 'styled-components';
import { StyledLiveBlock } from './StyledLiveBlock';
import { StyledLiveBlockRow } from './StyledLiveBlockRow';

export const StyledLiveList = (props) => {
    console.log('props.showList: ', props.showList)
    const rows = [
        // props.showList.slice(0, 3),
        // props.showList.slice(3, 6),
        // props.showList.slice(6, 9)
    ]
    return (
        <StyledUl >
            {
                // rows.map((row, rowNumber) => {
                //     return row.length > 0
                //         ? <StyledLiveBlockRow colCount={row.length} key={rowNumber} row={row} />
                //         : null;
                // })
                props.showList.map((block, blockNumber) => {
                    return <StyledLiveBlock key={blockNumber} image={block.image} flag={block.flag}
                        title={block.title} liveMaster={block.liveMaster} hot={block.hot} />
                })
            }
        </StyledUl>
    )
}
const StyledUl = styled.ul`
    position: relative;
    width: 100%;
    height : 806px;
    background-color: transparent;
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    list-style-type: none;
    justify-content: start;
    align-content: start;
`