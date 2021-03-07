import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #312E38;
    color: #FFF;
    font-family: 'Roboto', sans-serif;
    -webkit-font-smooothing: antialiased;
  }

  border-style, input, button {
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
    color: #ffffff;
  }

  input, textarea {
    color: #000;
  }

  button {
    cursor: pointer;
  }
`;
