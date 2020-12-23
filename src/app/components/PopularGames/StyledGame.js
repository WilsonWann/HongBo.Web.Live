import styled from 'styled-components';

export const StyledGame = styled.div`
    position: relative;
    min-width: calc(950px / 4);
    height: 100%;
    margin: 0 auto;
    background-image: url(${props => process.env.PUBLIC_URL + '/assets/images/Android/games_logo_' + props.gameName + '.png'});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    background-size: initial;
    border-right: 2px solid #e2c6a0;
    &:hover{
        background-image: url(${props => process.env.PUBLIC_URL + '/assets/images/Android/games_logo_' + props.gameName + '_h.png'});
    }
    &:last-child{
        border: none;
    }
`