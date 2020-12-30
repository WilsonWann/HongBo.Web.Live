import styled from 'styled-components'

export const StyledSubInfo = styled.div`
    position:relative;
    &:before{
        content: '';
        top: 2px;
        position: relative;
        width: 13px;
        height: 15px;
        padding-right: 6px;
        z-index:1;
    }
`