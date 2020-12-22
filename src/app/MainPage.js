import React from 'react'
import Recommendation from './Recommendation';
import PopularGames from './PopularGames';
import AllLiveChannels from './AllLiveChannels';
import styled from 'styled-components';

const MainPage = (props) => {
    return (

        <StyledMainPage className="MainPage">
            <StyledFloatingImageA className="MainPage_FloatingImageA" />
            <StyledFloatingImageB className="MainPage_FloatingImageB" />
            <StyledRecommendation className="MainPage_Recommendation">
                <Recommendation />
            </StyledRecommendation>
            <StyledPopularGames className="MainPage_PopularGames">
                <PopularGames />
            </StyledPopularGames>
            <StyledAllLiveChannels className="MainPage_AllLiveChannels">
                <AllLiveChannels />
            </StyledAllLiveChannels>
        </StyledMainPage>
    )
}

const StyledFloatingImageA = styled.div`
    position:absolute;
    background-image: 
        url(${process.env.PUBLIC_URL + '/assets/images/Android/BG_float_1A.png'}),
        url(${process.env.PUBLIC_URL + '/assets/images/Android/BG_float_2A.png'}),
        url(${process.env.PUBLIC_URL + '/assets/images/Android/BG_float_3A.png'});
    width:100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: 
        top 0 center,
        top 970px center,
        top 1620px center;
`
const StyledFloatingImageB = styled.div`
    position:absolute;
    background-image: 
        url(${process.env.PUBLIC_URL + '/assets/images/Android/BG_float_1B.png'}),
        url(${process.env.PUBLIC_URL + '/assets/images/Android/BG_float_2B.png'}),
        url(${process.env.PUBLIC_URL + '/assets/images/Android/BG_float_3B.png'});
    width:100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: 
        top 0 center,
        top 970px center,
        top 1620px center;
`
const StyledMainPage = styled.div`
    position:relative;
    background-image: 
        url(${process.env.PUBLIC_URL + '/assets/images/Android/BG_1.jpg'}),
        url(${process.env.PUBLIC_URL + '/assets/images/Android/BG_2.jpg'}),
        url(${process.env.PUBLIC_URL + '/assets/images/Android/BG_3.jpg'});
    width:100%;
    height: 100%;
    padding-top: 0.1px;
    background-repeat: no-repeat;
    background-position: 
        top 0 center,
        top 970px center,
        top 1620px center;
`

const StyledRecommendation = styled.div`
    position:relative;
    margin-top: 168px;
`
const StyledPopularGames = styled.div`
    position:relative;
    margin-top: 149px;
`
const StyledAllLiveChannels = styled.div`
    position:relative;
    margin-top: 156px;
`

export default MainPage
