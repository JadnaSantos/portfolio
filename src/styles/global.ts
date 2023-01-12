import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: ${({ theme }) => theme.colors.background};


    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;

    font-weight: normal;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  ol, ul, li {
    list-style: none;
    list-style-type: none;
  }

  button {
    cursor: pointer
  }

  ::-webkit-scrollbar {
    width: 0.6rem;
  }

  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.primary};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 1rem;
  }

`;
