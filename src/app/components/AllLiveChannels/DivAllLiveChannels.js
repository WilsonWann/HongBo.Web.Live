import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { LiveList } from "./DivAllLiveChannels/LiveList";
import { NavList } from "./DivAllLiveChannels/NavList";
import { Paging } from "./DivAllLiveChannels/Paging";
import GetGameTypeName from "./../../enum/GameType";

const _DEFAULT_GAME_TYPE_ID_ = 0;
const _PAGE_SIZE_ = 9;
const _NAV_ID_LIST_ = [0, 99, 4, 5, 1, 2, 6, 90];
export const DivAllLiveChannels = () => {
  const streamRoomList = useSelector(
    (state) => state.getStreamRoomListReducer.streamRoomList
  );

  const [selectedGameTypeRoomList, setSelectedGameTypeRoomList] = useState([]);
  const [showList, setShowList] = useState([]);
  const [navList, setNavList] = useState([]);
  const [currIndex, setCurrIndex] = useState(_DEFAULT_GAME_TYPE_ID_);

  const filteredGameTypeRoomList = (gameTypeID) => {
    const filteredRoomList =
      streamRoomList && streamRoomList.length
        ? streamRoomList.filter((room) => room.GameTypeID === gameTypeID)
        : streamRoomList;
    setSelectedGameTypeRoomList(filteredRoomList);
  };

  useEffect(() => {
    const navNameArr = [];
    _NAV_ID_LIST_.map((navID) => {
      navNameArr.push({
        name: GetGameTypeName(navID),
        id: navID,
      });
    });
    setNavList(navNameArr);
  }, [_NAV_ID_LIST_]);

  useEffect(() => {
    if (selectedGameTypeRoomList) {
      setShowList(selectedGameTypeRoomList.slice(0, 9));
    }
  }, [selectedGameTypeRoomList]);

  useEffect(() => {
    filteredGameTypeRoomList(currIndex);
  }, [currIndex]);

  return (
    <StyledDiv StyledDiv className="AllLiveChannels_bg">
      <StyledWrapperDiv>
        <NavList
          navList={navList}
          currIndex={currIndex}
          setCurrIndex={setCurrIndex}
        />
        <LiveList showList={showList}></LiveList>
        <Paging
          streamRoomList={streamRoomList}
          setShowList={setShowList}
          pageSize={_PAGE_SIZE_}
        ></Paging>
      </StyledWrapperDiv>
    </StyledDiv>
  );
};

const StyledWrapperDiv = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const StyledDiv = styled.div`
  &:before {
    content: url(${process.env.PUBLIC_URL +
    "/assets/images/Android/TITLE_3.png"});
    position: absolute;
    width: 395px;
    height: 84px;
    top: -84px;
    left: 50%;
    transform: translateX(-50%);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
  }
  position: relative;
  width: 1176px;
  height: 971px;
  margin: 0 auto;
  background-image: url(${process.env.PUBLIC_URL +
  "/assets/images/Android/3_BG.png"});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  padding: 34px 35px 20px;
  box-sizing: border-box;
`;
