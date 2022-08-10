import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
  }

  body {
    font-weight: 400;
    font-family: ${({ theme }) => theme.fonts.normal};
  }

  html {
    background-color: #f0f0f0;
    max-width: 100vw;
    width: 100vw;
    height: 100%;
    overflow-x: hidden;
  }

  strong {
    font-weight: 700;
  }

  button {
    border: none;
    background-color: transparent;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    font-style: normal;
    font-stretch: normal;
    white-space: nowrap;
    padding: 0;
    margin: 0;
    -webkit-tap-highlight-color: transparent;
    color: inherit;

    &:hover {
      cursor: pointer;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
    display: inline-block;
  }
`
