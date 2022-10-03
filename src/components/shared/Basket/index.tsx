import { BasketFooter, StyledBasket, TotalPrice } from "./style";
import {
  decrementQuantity,
  incrementQuantity,
  selectItems,
  selectTotalPrice,
} from "~/app/features/basket/basket-slice";
import { useAppDispatch, useTypedSelector } from "~/app/store";
import Card from "~/components/lib/Card";
import Text from "~/components/lib/Text";
import BasketItem from "../BasketItem";

const Basket = () => {
  const items = useTypedSelector(selectItems);
  const totalPrice = useTypedSelector(selectTotalPrice);

  const dispatch = useAppDispatch();

  const handleIncrement = (id: string) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrement = (id: string) => {
    dispatch(decrementQuantity(id));
  };

  return (
    <StyledBasket data-item-id="">
      <Card>
        {items.length > 0 ? (
          <>
            {items.map((item) => (
              <BasketItem
                key={item.id}
                product={item}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
              />
            ))}
            <BasketFooter>
              <TotalPrice>₺ {totalPrice}</TotalPrice>
            </BasketFooter>
          </>
        ) : (
          <>
            <Text>No items added.</Text>
          </>
        )}
      </Card>
    </StyledBasket>
  );
};

export default Basket;
