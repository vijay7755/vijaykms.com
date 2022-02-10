import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
    html {
        scroll-behavior: smooth;
    }

    *, *::before, *::after, h1, h2, h3, h4, h5, h6 {
        margin: 0;
        padding: 0;
    }
    h1, h2, h3, h4, h5, h6 {
        display: inline-block;
    }
    body {
        margin: 0;
        padding: 0;
        overflow-x: hidden;
        font-family: 'Roboto', sans-serif;
    }

    /* body::after, body::before {
        content: '';
        position: fixed;
        background: red;
        z-index: 10;
    }
    body::after {
        height: 1px;
        left: 0;
        right: 0;
        top: 50%;
    }
    body::before {
        width: 1px;
        left: 50%;
        top: 0;
        bottom: 0;
    } */
`

export default GlobalStyles