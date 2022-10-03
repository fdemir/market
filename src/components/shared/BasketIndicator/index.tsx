import { ReactComponent as BasketIcon } from "~/assets/basket.svg";
import Text from "~/components/lib/Text";
import { useAppDispatch, useTypedSelector } from "~/app/store";
import {
  selectTotalPrice,
  showBasketModal,
} from "~/app/features/basket/basket-slice";
import { StyledBasketIndicator } from "./style";

const BasketIndicator = () => {
  const totalPrice = useTypedSelector(selectTotalPrice);
  const dispatch = useAppDispatch();

  return (
    <StyledBasketIndicator onClick={() => dispatch(showBasketModal())}>
      <BasketIcon />
      <Text color="white" fw="bold">
        ₺ {totalPrice}
      </Text>
    </StyledBasketIndicator>
  );
};

export default BasketIndicator;
