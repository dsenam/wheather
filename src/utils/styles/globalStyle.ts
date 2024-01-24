import { createGlobalStyle } from "styled-components";

export const StyledGlobalStyle = createGlobalStyle`
 * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    
  }
  body {
    max-width: 100vw;
    font-family: Arial, Helvetica, sans-serif;
  }
  @keyframes loading {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

`;
