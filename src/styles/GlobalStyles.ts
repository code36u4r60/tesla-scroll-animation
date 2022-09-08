import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

*, input, button{                                                
  font-family: 'Gotham SSm', -apple-system,"system-ui",BlinkMacSystemFont,"Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  text-size-adjust: 100%;
}

button{
  cursor: pointer;
}

`;
