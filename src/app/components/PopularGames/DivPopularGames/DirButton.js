import styled from 'styled-components';

export const DirButton = (props) => {

    const { dir, list, currIndex, setCurrIndex, showNumber } = props;
    const setIndexByDir = (direction) => {
        if (direction === "L") {
            if (currIndex - 1 < 0) {
                return
            }
            setCurrIndex(currIndex - 1)
        } else if (direction === "R") {
            if (currIndex + 1 > list.length - showNumber) {
                return
            }
            setCurrIndex(currIndex + 1)
        }
    }

    return (
        <StyledButton onClick={() => setIndexByDir(dir)} dir={dir}></StyledButton>
    )
}
export const StyledButton = styled.button`
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