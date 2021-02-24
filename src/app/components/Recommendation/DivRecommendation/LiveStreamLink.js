import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { InfoDiv } from "./LiveStreamLink/InfoDiv";

export const LiveStreamLink = (props) => {
  const { selectedStreamRoom } = props;
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState(null);
  const [liveMaster, setLiveMaster] = useState(null);
  const [hot, setHot] = useState(null);
  useEffect(() => {
    if (selectedStreamRoom) {
      setImage(selectedStreamRoom.ImagePath);
      setTitle(selectedStreamRoom.Title);
      setLiveMaster(
        selectedStreamRoom.NickName
          ? selectedStreamRoom.NickName
          : selectedStreamRoom.Account
      );
      setHot(selectedStreamRoom.Popularity);
    }
  }, [selectedStreamRoom, title, liveMaster, hot]);
  return (
    <StyledA>
      <InfoDiv title={title} liveMaster={liveMaster} hot={hot} />
      <StyledDiv imagePath={image} />
    </StyledA>
  );
};
const StyledA = styled.a`
  position: relative;
  width: 960px;
  height: 538px;
`;

const StyledDiv = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => process.env.PUBLIC_URL + props.imagePath});
  background-color: transparent;
  background-size: cover;
  background-repeat: no-repeat;
  display: inline-block;
`;
