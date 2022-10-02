import React from "react";
import styled from "styled-components";
import Container from "~/components/lib/Container";

import { ReactComponent as Logo } from "~/assets/logo.svg";
import BasketIndicator from "~/components/shared/BasketIndicator";
import { useTypedSelector } from "~/app/store";
import { selectItems } from "~/app/features/basket/basket-slice";

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

const Header: React.FC = () => {
  const basketItems = useTypedSelector(selectItems);
  const hasItems = basketItems.length > 0;

  return (
    <StyledHeader>
      <StyledHeaderContainer>
        <StyledHeaderContent>
          <StyledLogo />
          {hasItems && <BasketIndicator />}
        </StyledHeaderContent>
      </StyledHeaderContainer>
    </StyledHeader>
  );
};

export default Header;
