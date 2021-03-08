import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: linear-gradient(45deg, rgb(29, 29, 29), rgb(102, 0, 153));
    background-size: 400% 400%;
    color: #FFF;
    font-family: 'Roboto', sans-serif;
    -webkit-font-smooothing: antialiased;
    animation: 'colors' 15s ease infinite;
  }

  @keyframes colors {
      0% {
        background-position: 0% 50%;
      }

      50% {
        background-position: 100% 50%;
      }

      100% {
        background-position: 0% 50%;
      }
    }

  border-style, input, button {
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
    color: #ffffff;
  }

  input, textarea {
    font-family: 'Roboto', sans-serif;
    color: #000;
  }

  button {
    cursor: pointer;
  }
`;
