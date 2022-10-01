import styled from "styled-components";
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

const StyledBasket = styled.div`
  width: 100%;
  border: 8px solid ${(props) => props.theme.colors.primary};
  border-radius: ${(props) => props.theme.borderRadius.sm};
`;

const TotalPrice = styled.div`
  padding: 17px 24px;
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: ${(props) => props.theme.borderRadius.sm};
  color: ${(props) => props.theme.colors.primary};
  margin-top: 24px;
  font-weight: ${(props) => props.theme.typography.fontWeight.semiBold};
`;

const BasketFooter = styled.div`
  display: flex;
  justify-content: flex-end;
`;

// FIXME: totalPrice toFixed is 3.14324234234234

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
    <StyledBasket>
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
