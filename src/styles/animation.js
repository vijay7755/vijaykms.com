import { keyframes } from "styled-components"

export const slide = keyframes`
    0% {
        opacity: 0;
        transform: translateX(-20%);
    }
    80% {
        transform: translateX(2%);
    }
    90% {
        transform: translateX(1%);
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
`

export const reveal = keyframes`
    0% {
        opacity: 0;
        transform: scaleX(0);
        transform-origin: left;
    }
    100% {
        opacity: 1;
        transform: scaleX(1);
    }
`