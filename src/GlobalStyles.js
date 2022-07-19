import {createGlobalStyle} from 'styled-components';

// Trick prettier into formatting "createGlobalStyle"
const styled = {createGlobalStyle};

export default styled.createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  :root {
    --primary-color: #dfdfe7;
    --primary-light-color: #efefef;
    --secondary-color: #f77c00;
    --third-color: #036;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    height: 100vh;
    font-family: sans-serif;
    max-width: 600px;
    background-color: var(--primary-color);
  }

  ul,
  ol,
  a,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
    padding: 0;
  }

  button,
  input,
  textarea {
    font: inherit;
  }

  ul li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
`;
