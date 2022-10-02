import styled from "styled-components";
import { addItem } from "~/app/features/basket/basket-slice";
import { selectPaginatedProducts } from "~/app/features/pagination/pagination-slice";
import { selectFilteredProducts } from "~/app/services/product";
import { useAppDispatch, useTypedSelector } from "~/app/store";
import Text from "~/components/lib/Text";
import { Product } from "~/types";
import ProductItem from "../ProductItem";

const StyledProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ theme }) => theme.spacing[3]};
  row-gap: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ProductList = () => {
  const {
    isLoading,
    isError,
    data: products,
  } = useTypedSelector(selectPaginatedProducts);

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

  if (!products?.length) {
    return <Text color="secondary">No products found.</Text>;
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
