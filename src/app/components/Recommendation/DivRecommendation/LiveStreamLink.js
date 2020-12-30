import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { InfoDiv } from './LiveStreamLink/InfoDiv';

export const LiveStreamLink = (props) => {
    const { selectedStreamRoom } = props
    const [image, setImage] = useState(null);
    const [title, setTitle] = useState(null);
    const [liveMaster, setLiveMaster] = useState(null);
    const [hot, setHot] = useState(null);
    useEffect(() => {
        if (selectedStreamRoom) {
            setImage(selectedStreamRoom.ImagePath);
            setTitle(selectedStreamRoom.Title);
            setLiveMaster(selectedStreamRoom.NickName
                ? selectedStreamRoom.NickName
                : selectedStreamRoom.Account);
            setHot(selectedStreamRoom.Popularity);
        }
    }, [selectedStreamRoom,title,liveMaster,hot]);
    return selectedStreamRoom
        ? (
            <StyledA>
                <InfoDiv title={title} liveMaster={liveMaster} hot={hot} />
                <StyledDiv imagePath={image} />
            </StyledA>
        )
        : null
}
const StyledA = styled.a`
    position: relative;
    width: 960px;
    height: 538px;
`

const StyledDiv = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    background-image: url(${props => props.imagePath});
    background-color: #ffffff;
    background-size: cover;
    background-repeat: no-repeat;
    display: inline-block;
`