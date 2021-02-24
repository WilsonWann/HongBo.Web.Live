import React, { useState } from "react";
import styled from "styled-components";

export const Paging = (props) => {
  const [pageNow, setPageNow] = useState(1);
  const { streamRoomList, setShowList, pageSize } = props;
  const pageTotalCount = streamRoomList
    ? Math.ceil(streamRoomList.length / pageSize)
    : 0;
  const list = [];
  const setPage = (page) => {
    if (page === 0 || page > pageTotalCount) {
      return;
    }
    setPageNow(page);
    const startIndex = pageSize * (page - 1);
    const endIndex = pageSize * page;
    streamRoomList
      ? setShowList(streamRoomList.slice(startIndex, endIndex))
      : setShowList([]);
  };
  for (let index = 1; index <= pageTotalCount; index++) {
    list.push(index);
  }

  return (
    <StyledDiv>
      <StyledButton onClick={() => setPage(1)}>{"|<"}</StyledButton>
      <StyledButton onClick={() => setPage(pageNow - 1)}>{"<"}</StyledButton>
      {list.length !== 0 &&
        list.map((item) => {
          return (
            <StyledButton
              className={pageNow === item ? "selected" : ""}
              onClick={() => setPage(item)}
              key={item}
              value={item}
            >
              {item}
            </StyledButton>
          );
        })}
      <StyledButton onClick={() => setPage(pageNow + 1)}>{">"} </StyledButton>
      <StyledButton onClick={() => setPage(pageTotalCount)}>
        {">|"}
      </StyledButton>
    </StyledDiv>
  );
};
const StyledButton = styled.button`
  position: relative;
  width: 30px;
  height: 30px;
  color: #724c2f;
  font-size: 16px;
  cursor: pointer;
  border: none;
  background-color: transparent;
  &.selected {
    border-radius: 50%;
    box-shadow: 0px 2px 1px 0 rgba(255, 243, 230, 0.84),
      inset 0px 2px 4.9px 0.2px rgba(81, 55, 21, 0.75);
    color: #ffffff;
  }
  &:focus {
    outline: none;
  }
`;
const StyledDiv = styled.div`
  position: relative;
  width: 100%;
  height: 30px;
  padding: 0 200px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
`;
