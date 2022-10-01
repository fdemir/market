import styled from "styled-components";
import { addItem } from "~/app/features/basket/basket-slice";
import { useAppDispatch } from "~/app/store";
import Text from "~/components/lib/Text";
import { useProductList } from "~/hooks/useProductList";
import { Product } from "~/types";
import ProductItem from "../ProductItem";

const StyledProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ theme }) => theme.spacing[3]};
`;

const ProductList = () => {
  const { isLoading, data: products, isError } = useProductList();
  const dispatch = useAppDispatch();

  const handleAddToBasket = (product: Product) => {
    dispatch(addItem(product));
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <Text>Error</Text>;
  }

  return (
    <StyledProductList>
      {products?.map((product) => (
        <ProductItem
          key={product.added}
          product={product}
          handleAddToBasket={handleAddToBasket}
        />
      ))}
    </StyledProductList>
  );
};

export default ProductList;
