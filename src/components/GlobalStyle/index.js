import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-family: 'Noto Sans TC', sans-serif;
    }
    #app {
        display: flex;
        flex-direction: column;
    }
    ul {
        padding-inline-start: 0;
        margin-block-start: 0;
        margin-block-end: 0;
        list-style-type: none;
    }
    a {
        text-decoration: none;
        cursor: pointer;
        color: currentColor;
    }
    button {
        outline: none;
        cursor: pointer;
    }
    dd {
        margin-inline-start: 0;
    }

`

export default GlobalStyle;
