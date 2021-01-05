import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { NavItem } from "./NavList/NavItem";

export const NavList = (props) => {
  const { navList, getGameType } = props;
  const [currIndex, setCurrIndex] = useState(navList[0].id);

  useEffect(() => {
    getGameType(currIndex);
  }, [currIndex]);

  return (
    <StyledUl>
      {navList.map((nav) => {
        return (
          <NavItem
            setCurrIndex={setCurrIndex}
            currIndex={currIndex}
            index={nav.id}
            key={nav.id}
            value={nav.name}
          ></NavItem>
        );
      })}
    </StyledUl>
  );
};

const StyledUl = styled.ul`
  position: relative;
  width: 100%;
  height: 32px;
  background-color: transparent;
  display: flex;
  justify-content: space-evenly;
  margin: 0;
  padding: 0;
  list-style-type: none;
`;
