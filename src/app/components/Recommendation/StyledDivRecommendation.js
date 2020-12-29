import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { StyledButtonRecommendationTBList } from './StyledButtonRecommendationTBList';

export const StyledDivRecommendation = () => {
    
    const streamRoomList = useSelector(state => state.getStreamRoomListReducer.streamRoomList)
    const [imagePath, setImagePath] = useState(null);
    useEffect(() => {
        if (streamRoomList) {
            console.log('Recommendation streamRoomList: ', streamRoomList)
            streamRoomList && setImagePath(streamRoomList[0].ImagePath)
        }
    }, [streamRoomList]);
    return (
        <StyledDiv imagePath={imagePath} className="Recommendation_bg" >
            <div className="Recommendation_LiveStream"></div>
            <StyledButtonRecommendationTBList />
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
    .Recommendation_LiveStream{
        position: relative;
        width: 960px;
        height: 538px;
        background-image: url(${props => props.imagePath});
        background-color: white;
        display: inline-block;
    }
    &:before{
        content:url(${process.env.PUBLIC_URL + '/assets/images/Android/TITLE_1.png'});
        position: absolute;
        width: 395px;
        height: 84px;
        top: -88px;
        left: 50%;
        transform: translateX(-50%);
        background-position: center center;
        background-repeat: no-repeat;
        background-size: contain;
    }
    &:after{
        content: url(/assets/images/Android/1_BG_frame.png);
        position: absolute;
        width: 1183px;
        height: 563px;
        top: -10px;
        left: 50%;
        transform: translateX(-50%);
        background-repeat: no-repeat;
        background-size: contain;
    }
    position: relative;
    width: 1174px;
    height: 540px;
    margin: 0 auto;
    background-image: url(${process.env.PUBLIC_URL + '/assets/images/Android/1_BG.png'});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    display: flex;
    padding: 3px 0 1px 4px;
    box-sizing: border-box;
`