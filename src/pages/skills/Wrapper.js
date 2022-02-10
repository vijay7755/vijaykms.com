import styled from "styled-components"

import { reveal } from "styles/animation"

export const Wrapper = styled.section`
    height: auto;
    background: ${props => props.theme.bg_glass};
    border: 1px solid ${props => props.theme.glass_border};
    border-radius: 10px;
    backdrop-filter: blur(5px);
    z-index: 3;
    margin-top: 1vw;
    text-align: left;
    padding: 0 4vw;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${reveal} 1s linear;
`
