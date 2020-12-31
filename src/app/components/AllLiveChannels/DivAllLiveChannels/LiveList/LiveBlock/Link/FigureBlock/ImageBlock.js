import React from "react";
import styled from "styled-components";

export const ImageBlock = (props) => {
  return (
    <StyledPicture>
      <StyledDiv className={props.name} image={props.image} />
    </StyledPicture>
  );
};
const StyledPicture = styled.picture``;

const StyledDiv = styled.div`
  &:before {
    content: "";
    position: absolute;
    width: 63px;
    height: 63px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-image: url(${process.env.PUBLIC_URL +
    "/assets/images/Android/play.png"});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    z-index: 1;
    opacity: 0;
  }
  position: relative;
  width: 100%;
  height: 196px;
  background-color: transparent;
  background-size: cover;
  background-image: url(${(props) => process.env.PUBLIC_URL + props.image});
  transition: transform 0.2s linear;
`;
