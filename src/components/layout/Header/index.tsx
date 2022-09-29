import React from "react";
import styled from "styled-components";
import Container from "~/components/lib/Container";

import { ReactComponent as Logo } from "~/assets/logo.svg";

const StyledHeader = styled.header`
  display: flex;
  height: 76.64px;
  background-color: ${(props) => props.theme.colors.primary};
  width: 100vw;
`;

const StyledHeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Container>
        <StyledHeaderContent>
          <span></span>
          <Logo />
          <span>dsadsa</span>
        </StyledHeaderContent>
      </Container>
    </StyledHeader>
  );
};

export default Header;
