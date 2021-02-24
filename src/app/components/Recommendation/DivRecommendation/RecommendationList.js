import React from "react";
import styled from "styled-components";
import { Recommendation } from "./RecommendationList/Recommendation";

export const RecommendationList = (props) => {
  const { streamRoomList, selectedRoomID, setSelectedRoomID } = props;
  return (
    <StyledUl className="Recommendation_thumbnail_list">
      {streamRoomList &&
        streamRoomList.map((streamRoom) => {
          return (
            <Recommendation
              imagePath={streamRoom.ImagePath}
              key={streamRoom.RoomID}
              index={+streamRoom.RoomID}
              selectedRoomID={selectedRoomID}
              setSelectedRoomID={setSelectedRoomID}
            />
          );
        })}
    </StyledUl>
  );
};

const StyledUl = styled.ul`
  position: relative;
  width: 212px;
  height: 538px;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  z-index: 1;
  margin: 0;
  padding: 0;
  list-style-type: none;
`;
