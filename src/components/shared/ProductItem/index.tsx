import { StyledProductItem, StyledImage, Name, AddButton } from "./style";
import Text from "~/components/lib/Text";
import { Product } from "~/types";
import ImagePlaceholder from "~/assets/image-placeholder.webp";

type ProductItemProps = {
  product: Product;
  handleAddToBasket: (product: Product) => void;
};

const ProductItem: React.FC<ProductItemProps> = ({
  product,
  handleAddToBasket,
}) => {
  return (
    <StyledProductItem data-test-id="product-item">
      <StyledImage>
        <img
          src={ImagePlaceholder}
          alt={product.name}
          width={124}
          height={124}
        />
      </StyledImage>
      <Text color="primary" fw="semiBold">
        ₺ {product.price}
      </Text>
      <Name color="dark" fw="semiBold">
        {product.name}
      </Name>
      <AddButton
        data-test-id="add-to-cart"
        onClick={() => handleAddToBasket(product)}
      >
        Add
      </AddButton>
    </StyledProductItem>
  );
};

export default ProductItem;
