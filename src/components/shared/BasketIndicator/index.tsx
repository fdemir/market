import { ReactComponent as BasketIcon } from "~/assets/basket.svg";
import styled from "styled-components";
import Text from "~/components/lib/Text";
import { useTypedSelector } from "~/app/store";
import { selectTotalPrice } from "~/app/features/basket/basket-slice";

const StyledBasketIndicator = styled.div`
  background-color: ${(props) => props.theme.colors.primaryDarken};
  padding: 0 ${(props) => props.theme.spacing[3]};
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.white};
  min-width: 129px;
  gap: 10px;
`;

const BasketIndicator = () => {
  const totalPrice = useTypedSelector(selectTotalPrice);

  return (
    <StyledBasketIndicator>
      <BasketIcon />
      <Text color="whiite" fw="bold">
        ₺ {totalPrice}
      </Text>
    </StyledBasketIndicator>
  );
};

export default BasketIndicator;
