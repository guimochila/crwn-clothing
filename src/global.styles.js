import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
  box-sizing: border-box;
}

*,
*:after,
*:before {
  box-sizing: inherit;
}

body {
  font-family: 'Open Sans Condensed', sans-serif;
  padding: 20px 50px;

  @media screen and (max-width: 800px) {
    padding: 10px;
  }
}

a {
  text-decoration: none;
  color: #000;
}

`;
