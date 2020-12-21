import React, { useState } from 'react';
import styled from 'styled-components';

const Recommendation = (props) => {
    const [Index, setIndex] = useState();
    console.log('process.env.PUBLIC_URL: ', process.env.PUBLIC_URL)
    return (
        <StyledDiv className="Recommendation_bg">
            <StyledBorder className="Recommendation_border">

            </StyledBorder>
        </StyledDiv>
    );
}

const StyledBorder = styled.div`
    &:before{
        content:url(${process.env.PUBLIC_URL + '/assets/images/Android/TITLE_1.png'});
        position: relative;
        width: 395px;
        height: 84px;
        top: -93px;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: contain;
    }
    position: relative;
    width: 1183px;
    height: 563px;
    top: -5px;
    background-image: url(${process.env.PUBLIC_URL + '/assets/images/Android/1_BG_frame.png'});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    box-sizing: border-box;
`;
const StyledDiv = styled.div`
    position: relative;
    width: 1174px;
    height: 540px;
    margin: 85px auto 1254px;
    background-image: url(${process.env.PUBLIC_URL + '/assets/images/Android/1_BG.png'});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
`
export default Recommendation;