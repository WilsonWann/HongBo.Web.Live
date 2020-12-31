import React from "react";
import styled from "styled-components";

export const Recommendation = (props) => {
  const { imagePath, index, selectedRoomID, setSelectedRoomID } = props;
  return (
    <StyledLi
      className={selectedRoomID === index ? "selected" : ""}
      imagePath={imagePath}
      value={index}
      onClick={(e) => setSelectedRoomID(+e.target.value)}
    ></StyledLi>
  );
};

export const StyledLi = styled.li`
  position: relative;
  width: 187px;
  height: 96px;
  margin: 9px auto 0;
  background-color: #ffffff;
  border: solid 2px #f4d7a8;
  border-radius: 5px;
  box-sizing: border-box;
  background-image: url(${(props) => process.env.PUBLIC_URL + props.imagePath});
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  &:before {
    content: url(${process.env.PUBLIC_URL +
    "/assets/images/Android/thumbnail_182x92_h.png"});
    position: absolute;
    width: 204px;
    height: 104px;
    top: -6px;
    left: -16px;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    display: none;
  }
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(177, 169, 156, 0.73);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    display: block;
  }
  &:hover,
  &.selected {
    &:before {
      display: block;
    }
    &:after {
      display: none;
    }
  }
  &:focus {
    outline: none;
  }
  &:last-child {
    margin: 10px auto;
  }
`;
