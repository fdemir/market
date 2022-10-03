import { addItem } from "~/app/features/basket/basket-slice";
import { selectPaginatedProducts } from "~/app/features/pagination/pagination-slice";
import { useAppDispatch, useTypedSelector } from "~/app/store";
import Text from "~/components/lib/Text";
import { Product } from "~/types";
import ProductItem from "../ProductItem";
import { StyledProductList } from "./style";

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
