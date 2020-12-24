import React from 'react'
import styled from 'styled-components';
import { StyledImageBlock } from './StyledImageBlock';
import { StyledInfoBlock } from './StyledInfoBlock';

export const StyledLiveBlock = (props) => {
    return (
        <StyledDiv flag={props.flag}>
            <StyledImageBlock image={props.image} name="image-block-hover" />
            <StyledInfoBlock title={props.title} liveMaster={props.liveMaster} hot={props.hot} />
        </StyledDiv>
    )
}
const StyledDiv = styled.div`
    &:before,
    &:after{
        content: '';
        position: absolute;
        width: 51px;
        height: 54px;
        top: 147px;
        left: 291px;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: contain;
        background-image: url(${process.env.PUBLIC_URL + '/assets/images/Android/3_tag.png'});
        z-index:1;
    } 
    &:after{
        background-size: initial;
        background-image: url(${props => process.env.PUBLIC_URL + '/assets/images/Android/tag_logo_' + props.flag + '.png'});
    }
    position: relative;
    width: 350px;
    height : 258px;
    background-color: lightgoldenrodyellow;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
    &:hover{
        box-shadow: 0 0 0 3px #ff0000;
        .image-block-hover{
            &:before{
                opacity: 1;
            }
            transform:scale(1.1);
        }
    }
`
