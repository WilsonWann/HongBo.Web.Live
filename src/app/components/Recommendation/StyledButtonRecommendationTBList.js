import React, { useEffect } from 'react'
import styled from 'styled-components';
import { StyledButtonRecommendationTB } from './StyledButtonRecommendationTB';

export const StyledButtonRecommendationTBList = (props) => {

    const { streamRoomList, selectedRoomID, setSelectedRoomID } = props
    return (
        <StyledDiv className="Recommendation_thumbnail_list" >
            {
                streamRoomList.map((streamRoom) => {
                    return <StyledButtonRecommendationTB
                        imagePath={streamRoom.ImagePath}
                        key={streamRoom.RoomID}
                        index={+streamRoom.RoomID}
                        selectedRoomID={selectedRoomID}
                        setSelectedRoomID={setSelectedRoomID} />
                })
            }
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
    position: relative;
    width: 212px;
    height: 538px;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    z-index:1;
`