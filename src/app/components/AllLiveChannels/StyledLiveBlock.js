import React, { useEffect } from 'react'
import styled from 'styled-components';
import { StyledLink } from './StyledLink';
import GetGameName from './../../enum/Platform';

export const StyledLiveBlock = (props) => {
    const { streamRoom } = props
    const {
        Account,
        GameTypeID,
        ImagePath,
        NickName,
        PlatformID,
        RoomID,
        Title,
        needPass
    } = streamRoom
    const gameName = GetGameName(PlatformID);
    return (
        <StyledLi flag={gameName}>
            <StyledLink
                image={ImagePath}
                title={Title}
                liveMaster={NickName ? NickName : Account}
                hot={props.hot} />
        </StyledLi>
    )
}

const StyledLi = styled.li`
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
        background-size: 80%;
        background-image: url(${props => process.env.PUBLIC_URL + '/assets/images/Android/logo_' + props.flag + '.png'});
    }
    position: relative;
    width: 33%;
    max-width: calc(33% - 10px);
    height : 258px;
    background-color: lightgoldenrodyellow;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
    margin: 0 6px 11px;
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
