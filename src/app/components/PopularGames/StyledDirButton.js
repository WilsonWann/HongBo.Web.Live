import styled from 'styled-components';

export const StyledDirButton = styled.button`
    position: relative;
    width: 36px;
    height: 62px;
    margin: 0;
    padding: 0;
    border: none;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    background-color: transparent;
    cursor: pointer;
    background-image: url(${props => process.env.PUBLIC_URL + '/assets/images/Android/2_arrow_' + props.dir + '.png'});
    &:hover,
    &:active{
        background-image: url(${props => process.env.PUBLIC_URL + '/assets/images/Android/2_arrow_' + props.dir + '_h.png'});
    }
    &:focus{
        outline:none;
    }
`