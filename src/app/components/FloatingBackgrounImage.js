import React from 'react';
import styled from 'styled-components';

export const FloatingBackgrounImage = () => {

    return (
        <StyledDiv />
    )
}

export const StyledDiv = styled.div`
    position:absolute;
    background-image: 
        url(${props => '/assets/images/Android/BG_float_1' + props.type + '.png'}),
        url(${props => '/assets/images/Android/BG_float_2' + props.type + '.png'}),
        url(${props => '/assets/images/Android/BG_float_3' + props.type + '.png'});
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position:
        top 0 center,
        top 970px center,
        top 1620px center;
    transition: top 1s ease-in;
`
