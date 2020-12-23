import React from 'react'
import styled from 'styled-components';

export const StyledImageBlock = (props) => {
    return (
        <StyledDiv image={props.image} />
    )
}

const StyledDiv = styled.div`
    position: relative;
    width: 100%;
    height : 196px;
    background-color: lightskyblue;
    background-image: url(${props => process.env.PUBLIC_URL + '/assets/images/Android/3_thumbnail-' + props.image + '.jpg'});
`
