import React from 'react'
import styled from 'styled-components';

export const StyledDivRecommendation = () => {
    return (
        <StyledDiv className="Recommendation_bg" />
    )
}

const StyledDiv = styled.div`
    &:before{
        content:url(${process.env.PUBLIC_URL + '/assets/images/Android/TITLE_1.png'});
        position: relative;
        width: 395px;
        height: 84px;
        top: -92px;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: contain;
    }
    &:after{
        content: url(/assets/images/Android/1_BG_frame.png);
        position: relative;
        width: 1183px;
        height: 563px;
        top: -100px;
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
`