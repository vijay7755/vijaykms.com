import React from "react"
import styled from "styled-components"


const Title = styled.div`
    position: fixed;
    top: ${props => props.top};
    left: ${props => props.left};
    font-size: calc(0.6rem + 4vw);
    font-weight: bolder;    

    color: ${props => props.theme.secondary};
    opacity: 0.2;
    z-index: 0;
    transform: translateX(-50%);

    &>*:first-child {
        color: ${props => props.theme.primary};
    }
`

const PageTitle = ({ title1, title2, top, left }) => {
    return (
        <Title top={top} left={left}>
            {title1}
            <span>{` ${title2}`}</span>
        </Title>
    )
};

export default PageTitle;
