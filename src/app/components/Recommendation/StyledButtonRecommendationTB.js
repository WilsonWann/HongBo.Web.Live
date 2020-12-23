import styled from 'styled-components';

export const StyledButtonRecommendationTB = styled.button`
    position: relative;
    width: 182px;
    height: 92px;
    background-color: green;
    border: none;
    background-image: url(${props => process.env.PUBLIC_URL + '/assets/images/Android/1_thumbnail-' + props.value + '.jpg'});
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
    &:hover,
    &.selected{
        &:before{
            display:block;
        }
    }
`