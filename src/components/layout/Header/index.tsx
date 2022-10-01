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
`;

const StyledHeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
`;

// FIXME: not structured well, should be refactored, centering is not working

const Header: React.FC = () => {
  const basketItems = useTypedSelector(selectItems);
  const hasItems = basketItems.length > 0;

  return (
    <StyledHeader>
      <Container>
        <StyledHeaderContent>
          <span></span>
          <Logo />
          {hasItems && <BasketIndicator />}
        </StyledHeaderContent>
      </Container>
    </StyledHeader>
  );
};

export default Header;
