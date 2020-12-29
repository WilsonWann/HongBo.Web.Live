import { useEffect } from 'react';
import styled from 'styled-components';

export const StyledButtonRecommendationTB = (props) => {
    const { imagePath, index, selectedRoomID, setSelectedRoomID} = props;
    return (
        <StyledButton
            className={selectedRoomID === index ? 'selected' : ''}
            imagePath={imagePath} value={index} 
            onClick={(e) => setSelectedRoomID(+e.target.value)}></StyledButton>
    )
}

export const StyledButton = styled.button`
    position: relative;
    // width: 182px;
    // height: 92px;
    width: 187px;
    height: 96px;
    margin: 9px auto 0;
    background-color: green;
    border: solid 2px #f4d7a8;
    border-radius: 5px;
    box-sizing: border-box;
    background-image: url(${props => props.imagePath});
    background-repeat: no-repeat;
    background-size: cover;
    &:before{
        content:url(${process.env.PUBLIC_URL + '/assets/images/Android/thumbnail_182x92_h.png'});
        position: absolute;
        width: 204px;
        height:104px;
        top: -6px;
        left: -16px;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: contain;
        display: none;
    }
    &:after{
        content:'';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        // background-image: linear-gradient(rgba(81, 81, 81, 0.5), rgba(235, 222, 202, 0.45));
        background-color: rgba(177, 169, 156, 0.73);
        background-position: center center;
        background-repeat: no-repeat;
        background-size: contain;
        display:block;
    }
    &:hover,
    &.selected{
        &:before{
            display:block;
        }
        &:after{
            display:none;
        }
    }
    &:focus{
        outline: none;
    }
    &:last-child{
        margin: 10px auto;
    }
`