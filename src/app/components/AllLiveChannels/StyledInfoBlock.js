import React from 'react'
import styled from 'styled-components';

export const StyledInfoBlock = (props) => {
    return (
        <StyledDiv >
            <StyledTitle>{props.title}</StyledTitle>
            <StyledSubTitle>
                <StyledLiveMaster>{props.liveMaster}</StyledLiveMaster>
                <StyledHot>{props.hot}</StyledHot>
            </StyledSubTitle>
        </StyledDiv>
    )
}

const StyledTitle = styled.div`
    font-size: 16px;
    font-weight: 900;
    text-align: left;
`
const StyledSubTitle = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 14px;
    justify-content: space-between;
    padding-left: 16px;
`
const StyledSubInfo = styled.div`
    position:relative;
    &:before{
        content: '';
        position: absolute;
        width: 13px;
        height: 15px;
        top: -2px;
        left: -17px;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: contain;
        z-index:1;
    }
`
const StyledLiveMaster = styled(StyledSubInfo)`
    &:before{
        background-image: url(${process.env.PUBLIC_URL + '/assets/images/Android/user.svg'});
    }
`
const StyledHot = styled(StyledSubInfo)`
    &:before{
        background-image: url(${process.env.PUBLIC_URL + '/assets/images/Android/hot.svg'});
    }
`

const StyledDiv = styled.div`
    position: relative;
    width: 100%;
    height : 62px;
    line-height: 1;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: #724c2f;
    padding: 12px 16px 12px 20px;
    box-sizing: border-box;
    font-family: PingFang-SC;
`
