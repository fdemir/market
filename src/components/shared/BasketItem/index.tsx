import React from "react";
import Text from "~/components/lib/Text";
import styled from "styled-components";
import { BasketProduct, Product } from "~/types";

import { ReactComponent as DecrementIcon } from "~/assets/decrement.svg";
import { ReactComponent as IncrementIcon } from "~/assets/increment.svg";

const StyledBasketItem = styled.div`
  width: 100%;
  display: flex;
  padding: 18px 0;
  border-bottom: 1px solid #f4f4f4;
  justify-content: space-between;
  gap: 10px;

  &:first-child {
    padding-top: 0;
  }
`;

const StyledItemCount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

const StyledItemQuantityText = styled(Text)`
  width: 32px;
  height: 32px;
  background-color: ${(props) => props.theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ControlButton = styled.button`
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`;

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
    <StyledBasketItem>
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
        <ControlButton onClick={() => onDecrement(product.id)}>
          <DecrementIcon />
        </ControlButton>
        <StyledItemQuantityText size="md" fw="bold" color="white">
          {quantity}
        </StyledItemQuantityText>
        <ControlButton onClick={() => onIncrement(product.id)}>
          <IncrementIcon />
        </ControlButton>
      </StyledItemCount>
    </StyledBasketItem>
  );
};

export default BasketItem;
