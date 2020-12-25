import React, { useState } from 'react'
import styled from 'styled-components';

export const StyledPaging = (props) => {
    const [pageNow, setPageNow] = useState(1);
    const totalGameList = props.totalGameList
    const setShowList = props.setShowList
    const pageSize = props.pageSize
    const pageTotalCount = Math.ceil(totalGameList.length / pageSize)
    const list = [];
    const setPage = (page) => {
        if (page === 0 || page > pageTotalCount) {
            return;
        }
        setPageNow(page);
        const startIndex = pageSize * (page - 1);
        const endIndex = pageSize * (page);
        totalGameList
            ? setShowList(totalGameList.slice(startIndex, endIndex))
            : setShowList([])
    }
    for (let index = 1; index <= pageTotalCount; index++) {
        list.push(index);
    }

    return (
        <StyledDiv>
            <StyledButton onClick={() => setPage(1)} value="|<" >{"|<"}</StyledButton>
            <StyledButton onClick={() => setPage(pageNow - 1)} value="<" >{"<"}</StyledButton>
            {
                list.map(item => {
                    return <StyledButton className={pageNow === item ? 'selected' : ''}
                        onClick={() => setPage(item)} key={item} value={item} >{item}</StyledButton>
                })
            }
            <StyledButton onClick={() => setPage(pageNow + 1)} value=">" >{">"}</StyledButton>
            <StyledButton onClick={() => setPage(pageTotalCount)} value=">|" >{">|"}</StyledButton>
        </StyledDiv>
    )
}
const StyledButton = styled.button`
    position: relative;
    width: 30px;
    height : 30px;
    color: #724c2f;
    font-size: 16px;
    cursor: pointer;
    border: none;
    background-color: transparent;
    &.selected,
    &:active{
        border-radius: 50%;
        box-shadow: 0px 2px 1px 0 rgba(255, 243, 230, 0.84), inset 0px 2px 4.9px 0.2px rgba(81, 55, 21, 0.75);
        color: #ffffff;
    }
    &:focus{
        outline: none;
    }

`
const StyledDiv = styled.div`
    position: relative;
    width: 100%;
    height : 30px;
    padding: 0 200px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
`