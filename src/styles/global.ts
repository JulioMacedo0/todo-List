import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body {
    height: 100vh;
    width: 100vw;
    background-color: #f0efe9;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  html {
    font-size: 62.5%;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
  .toastBody {

  font-size: 1.6rem ;
}

`;

export default GlobalStyles;
