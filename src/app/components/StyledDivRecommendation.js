import React from 'react'
import styled from 'styled-components';

export const StyledDivRecommendation = () => {
    return (
        <StyledDiv className="Recommendation_bg" >
            <div className="Recommendation_LiveStream"></div>
            <div className="Recommendation_thumbnail_list">
                <div className="Recommendation_thumbnail A"></div>
                <div className="Recommendation_thumbnail B selected"></div>
                <div className="Recommendation_thumbnail C"></div>
                <div className="Recommendation_thumbnail D"></div>
                <div className="Recommendation_thumbnail E"></div>
            </div>
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
    .Recommendation_thumbnail_list{
        position: relative;
        width: 212px;
        height: 538px;
        background-color: transparent;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
    }
    .Recommendation_thumbnail{
        position: relative;
        width: 182px;
        height: 92px;
        background-color: green;
        &.A{
            background-image: url(${process.env.PUBLIC_URL + '/assets/images/Android/1_thumbnail-1.jpg'});
        }
        &.B{
            background-image: url(${process.env.PUBLIC_URL + '/assets/images/Android/1_thumbnail-2.jpg'});
        }
        &.C{
            background-image: url(${process.env.PUBLIC_URL + '/assets/images/Android/1_thumbnail-3.jpg'});
        }
        &.D{
            background-image: url(${process.env.PUBLIC_URL + '/assets/images/Android/1_thumbnail-4.jpg'});
        }
        &.E{
            background-image: url(${process.env.PUBLIC_URL + '/assets/images/Android/1_thumbnail-5.jpg'});
        }
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