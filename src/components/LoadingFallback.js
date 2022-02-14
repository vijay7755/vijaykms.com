import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background: ${props => props.theme.dark};
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
        color: ${props => props.theme.secondary};
    }
`

const LoadingFallback = () => {
    return (
        <Wrapper>
            <h1>Loading...</h1>
        </Wrapper>
    )
}

export default LoadingFallback
