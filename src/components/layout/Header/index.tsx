import React from "react";
import BasketIndicator from "~/components/shared/BasketIndicator";
import { useTypedSelector } from "~/app/store";
import { selectItems } from "~/app/features/basket/basket-slice";
import {
  StyledHeader,
  StyledHeaderContainer,
  StyledHeaderContent,
  StyledLogo,
} from "./style";

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
