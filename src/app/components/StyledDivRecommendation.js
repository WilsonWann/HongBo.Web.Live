import React from 'react'
import styled from 'styled-components';
import { StyledButtonRecommendationTBList } from './StyledButtonRecommendationTBList';

export const StyledDivRecommendation = () => {
    const bt_arr = [0, 1, 2, 3, 4];

    return (
        <StyledDiv className="Recommendation_bg" >
            <div className="Recommendation_LiveStream"></div>
            <StyledButtonRecommendationTBList list={bt_arr} />
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
    .Recommendation_LiveStream{
        position: relative;
        width: 960px;
        height: 538px;
        background-image: url(${process.env.PUBLIC_URL + '/assets/images/Android/1_img.jpg'});
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
`