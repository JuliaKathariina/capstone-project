import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
      :root {
          --text-primary: black;
          --background-primary: #edf0f5;
      }
  
      * {
          box-sizing: border-box;
          
      }
  
      body {
          font-family: 'Noto Sans', sans-serif;
          background-color: var(--background-primary);
          color: var(--text-primary);
          margin: 0px;
      }
  `;

export default GlobalStyle;
