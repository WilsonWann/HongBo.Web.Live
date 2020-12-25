import React, { useState } from 'react'
import styled from 'styled-components';
import { StyledButtonRecommendationTB } from './StyledButtonRecommendationTB';

export const StyledButtonRecommendationTBList = (props) => {
    const list = props.list;
    const [index, setIndex] = useState(0);

    return (
        <StyledDiv className="Recommendation_thumbnail_list" >
            {
                list.map((i) => {
                    return <StyledButtonRecommendationTB className={i === +index ? 'selected' : ''} key={i} value={i} onClick={(e) => setIndex(e.target.value)} />
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
    justify-content: space-evenly;
    align-items: center;
    z-index:1;
`