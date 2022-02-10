import React from "react"
import styled from "styled-components"

import { reveal } from "styles/animation"
import intro from "data/about.json"

const Box = styled.div`
    height: auto;
    background: ${props => props.theme.bg_glass};
    border: 1px solid ${props => props.theme.glass_border};
    border-radius: 10px;
    backdrop-filter: blur(3px);
    z-index: 3;
    margin-top: 5vw;
    text-align: left;
    padding: 2vw 4vw;
    animation: ${reveal} 1s linear;
`
const Text = styled.p`
    font-family: 'Open Sans', sans-serif;
    font-weight: bold;
    word-spacing: 5px;
    color: ${props => props.theme.secondary};
`

const Introduction = () => {
    return (
        <Box>
            {intro.map((content, i) => {
                return (
                    <div key={i}>
                        <Text>{content}</Text>
                        <br />
                    </div>
                )
            })}
        </Box>
    )
}

export default Introduction
