import React, { useEffect } from "react";
import Recommendation from "./Recommendation";
import PopularGames from "./PopularGames";
import AllLiveChannels from "./AllLiveChannels";
import Logo from "./Logo";
import { FloatingBackgrounImage } from "./components/FloatingBackgrounImage";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { GET_TOP_GAME_REQUEST } from "./actions/GetTopGameAction.js";
import { LIVE_GUEST_INFO_REQUEST } from "./actions/LiveGuestInfoAction";
import { APP_GET_URL_ASYNC_REQUEST } from "./actions/AppGetUrlAsyncAction";

const MainPage = () => {
  const dispatch = useDispatch();
  const topGameList = useSelector(
    (state) => state.getTopGameReducer.topGameList
  );
  useEffect(() => {
    dispatch({ type: GET_TOP_GAME_REQUEST });
    dispatch({ type: LIVE_GUEST_INFO_REQUEST });
    dispatch({ type: APP_GET_URL_ASYNC_REQUEST });
  }, [dispatch]);
  return (
    <StyledMainPage className="MainPage">
      <Logo className="MainPage_Logo" />
      <FloatingBackgrounImage className="MainPage_FloatingImage" type="A" />
      <FloatingBackgrounImage className="MainPage_FloatingImage" type="B" />
      <StyledRecommendation className="MainPage_Recommendation">
        <Recommendation />
      </StyledRecommendation>
      <StyledPopularGames className="MainPage_PopularGames">
        <PopularGames topGameList={topGameList} />
      </StyledPopularGames>
      <StyledAllLiveChannels className="MainPage_AllLiveChannels">
        <AllLiveChannels />
      </StyledAllLiveChannels>
    </StyledMainPage>
  );
};

const StyledMainPage = styled.div`
  position: relative;
  background-image: url(${process.env.PUBLIC_URL +
    "/assets/images/Android/BG_1.jpg"}),
    url(${process.env.PUBLIC_URL + "/assets/images/Android/BG_2.jpg"}),
    url(${process.env.PUBLIC_URL + "/assets/images/Android/BG_3.jpg"});
  width: 100%;
  height: 100%;
  padding-top: 0.1px;
  background-repeat: no-repeat;
  background-position: top 0 center, top 970px center, top 1620px center;
  .MainPage_FloatingImage {
    top: 0;
  }
`;

const StyledRecommendation = styled.div`
  position: relative;
  margin-top: 181px;
`;
const StyledPopularGames = styled.div`
  position: relative;
  margin-top: 149px;
`;
const StyledAllLiveChannels = styled.div`
  position: relative;
  margin-top: 156px;
  padding-bottom: 60px;
`;

export default MainPage;
