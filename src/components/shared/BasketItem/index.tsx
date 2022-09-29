import React from "react";
import Text from "~/components/lib/Text";
import styled from "styled-components";
import { Product } from "~/types";

const StyledBasketItem = styled.div`
  width: 100%;
  display: flex;
  padding: 18px 0;
  border-bottom: 1px solid #f4f4f4;
  justify-content: space-between;

  &:first-child {
    padding-top: 0%;
  }
`;

type BasketItemProps = {
  product: Product;
};

const BasketItem: React.FC<BasketItemProps> = ({ product }) => {
  return (
    <StyledBasketItem>
      <div>
        <div>
          <Text>{product.name}</Text>
        </div>
        <div>
          <Text color="primary" fw="semiBold">
            ₺ {product.price}
          </Text>
        </div>
      </div>
      <div></div>
    </StyledBasketItem>
  );
};

export default BasketItem;
