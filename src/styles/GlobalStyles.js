import {createGlobalStyle} from 'styled-components';

import bg from '../assets/background.png'

export default createGlobalStyle `
  * {
    margin:0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    min-height: 100%;
    background-image: url(${bg}) ;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;
    background-color: #202020;
  }

   *, button, input {
      border: 0;
      background: none;
      font-family: 'Roboto', -apple-system, system-ui, sans-serif;
   }

   ul{
     list-style: none;
     padding-left: 0;
   }
`;