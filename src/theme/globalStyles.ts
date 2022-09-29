import { createGlobalStyle } from "styled-components";
import { theme } from "./variables";

export const GlobalStyle = createGlobalStyle<{ theme?: typeof theme }>`


  body {
    font-family: ${({ theme }) => theme.typography.fontFamily.sans};
    color: ${({ theme }) => theme.colors.dark};
    font-size: ${({ theme }) => theme.typography.fontSize.base};
    background-color:  ${({ theme }) => theme.colors.light};
    line-height: 18px;
  }
`;
