import { createGlobalStyle } from 'styled-components'
import * as colors from 'styles/colors'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Gotham Bold';
    src: url('./fonts/Gotham-Bold.otf') format('opentype'), url('./fonts/GothamBold.ttf') format('truetype');
    font-style: bold;
    font-weight: 700;
  }

  @font-face {
    font-family: 'Gotham Bold';
    src: url('./fonts/Gotham-Bold.otf') format('opentype'), url('./fonts/GothamBold.ttf') format('truetype');
    font-style: semiBold;
    font-weight: 500;
  }

  @font-face {
    font-family: 'Gotham Bold';
    src: url('./fonts/Gotham-Bold.otf') format('opentype'), url('./fonts/GothamBold.ttf') format('truetype');
    font-style: normal;
    font-weight: 300;
  }

  @font-face {
    font-family: 'Gotham Book';
    src: url('./fonts/Gotham-Bold.otf');
    font-style: bold;
    font-weight: 700;
  }

  body {
    font-family: 'Gotham';
    line-height: 150%;
    font-size: 16px;
    color: ${colors.primaryText}
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-weight: bold;
    align-items: center;
    margin: 0;
  }

  h1 {
    font-size: 1.75rem;
    // line-height: 1.75rem;
  }

  h2 {
    font-size: 1.25rem;
    // line-height: 1.25rem;
  }

  h3 {
    font-size: 1.125rem;
    // line-height: 1.125rem;
  }

  h4 {
    font-size: 1rem;
    // line-height: 1rem;
  }

  h5 {
    font-size: 0.875rem;
    // line-height: 0.875rem;
  }

  p {
    font-size: 1rem;
  }
`

export default GlobalStyle
