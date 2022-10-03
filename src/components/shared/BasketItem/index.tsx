import React from "react";
import Text from "~/components/lib/Text";
import { BasketProduct } from "~/types";

import { ReactComponent as DecrementIcon } from "~/assets/decrement.svg";
import { ReactComponent as IncrementIcon } from "~/assets/increment.svg";
import {
  ControlButton,
  StyledBasketItem,
  StyledItemCount,
  StyledItemQuantityText,
} from "./style";

type BasketItemProps = {
  product: BasketProduct;
  onIncrement: (id: string) => void;
  onDecrement: (id: string) => void;
};

const BasketItem: React.FC<BasketItemProps> = ({
  product,
  onIncrement,
  onDecrement,
}) => {
  const { data, quantity } = product;

  return (
    <StyledBasketItem data-test-id="basket-item">
      <div>
        <div>
          <Text>{data.name}</Text>
        </div>
        <div>
          <Text color="primary" fw="semiBold">
            ₺ {data.price}
          </Text>
        </div>
      </div>
      <StyledItemCount>
        <ControlButton
          onClick={() => onDecrement(product.id)}
          data-test-id="decrement"
        >
          <DecrementIcon />
        </ControlButton>
        <StyledItemQuantityText
          size="md"
          fw="bold"
          color="white"
          data-test-id="quantity"
        >
          {quantity}
        </StyledItemQuantityText>
        <ControlButton
          onClick={() => onIncrement(product.id)}
          data-test-id="increment"
        >
          <IncrementIcon />
        </ControlButton>
      </StyledItemCount>
    </StyledBasketItem>
  );
};

export default BasketItem;
