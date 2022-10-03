import styled from "styled-components";

import Container from "~/components/lib/Container";
import { ReactComponent as Logo } from "~/assets/logo.svg";

const StyledHeader = styled.header`
  display: flex;
  height: 76.64px;
  background-color: ${(props) => props.theme.colors.primary};
  width: 100vw;
  position: relative;
`;

const StyledHeaderContent = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const StyledLogo = styled(Logo)`
  height: 100%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    left: 16px;
    transform: translateX(0);
  }
`;

const StyledHeaderContainer = styled(Container)`
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    padding: 0;
  }
`;

export { StyledHeader, StyledHeaderContent, StyledHeaderContainer, StyledLogo };
