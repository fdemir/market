import styled from "styled-components";
import { addItem } from "~/app/features/basket/basket-slice";
import { useGetProductsQuery } from "~/app/services/product";
import { useAppDispatch } from "~/app/store";
import { Product } from "~/types";
import ProductItem from "../ProductItem";

const StyledProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ theme }) => theme.spacing[3]};
`;

const ProductList = () => {
  const { isLoading, data: products, isError } = useGetProductsQuery();
  const dispatch = useAppDispatch();

  const handleAddToBasket = (product: Product) => {
    dispatch(addItem(product.slug));
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
          key={product.name}
          product={product}
          handleAddToBasket={handleAddToBasket}
        />
      ))}
    </StyledProductList>
  );
};

export default ProductList;
