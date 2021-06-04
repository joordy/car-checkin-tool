import { createGlobalStyle } from 'styled-components'
import GothamBoldTTF from './fonts/gotham-bold-webfont.ttf'
import GothamBoldWOFF from './fonts/gotham-bold-webfont.woff'
import GothamBoldWOFF2 from './fonts/gotham-bold-webfont.woff2'
import GothamBoldWSVG from './fonts/gotham-bold-webfont.svg'
import GothamBookTTF from './fonts/gotham-book-webfont.ttf'
import GothamBookWOFF from './fonts/gotham-book-webfont.woff'
import GothamBookWOFF2 from './fonts/gotham-book-webfont.woff2'
import GothamBookSVG from './fonts/gotham-book-webfont.svg'
import * as colors from 'styles/colors'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'gotham';
      src: url(${GothamBookWOFF2}) format('woff2'),
          url(${GothamBookWOFF}) format('woff'),
          url(${GothamBookTTF}) format('truetype'),
          url(${GothamBookSVG}) format('svg');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'gotham';
      src: url(${GothamBoldWOFF2}) format('woff2'),
        url(${GothamBoldWOFF}) format('woff'),
        url(${GothamBoldTTF}) format('truetype'),
        url(${GothamBoldWSVG}) format('svg');
    font-weight: 700;
    font-style: bold;
  }

  body {
    font-family: 'gotham', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1em;
    color: ${colors.primaryText}
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: 'gotham', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: bold;
    align-items: center;
    margin: 0;
  }

  h1 {
    font-size: 1.75rem;
  }

  h2 {
    font-size: 1.25rem;
  }

  h3 {
    font-size: 1.125rem;
  }

  h4 {
    font-size: 1rem;
  }

  h5 {
    font-size: 0.875rem;
  }

  p {
    font-size: 1rem;
  }
  button {
    font: unset;
  }

`

export default GlobalStyle
