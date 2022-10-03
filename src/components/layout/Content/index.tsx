import { StyledContent, StyledProductListCard } from "./style";
import Text from "~/components/lib/Text";
import Pagination from "~/components/shared/Pagination";
import ProductList from "~/components/shared/ProductList";
import SelectItemType from "~/components/shared/SelectItemType";

const Content = () => {
  return (
    <StyledContent>
      <Text size="lg" color="secondary">
        Products
      </Text>
      <SelectItemType />
      <StyledProductListCard>
        <ProductList />
      </StyledProductListCard>
      <Pagination />
    </StyledContent>
  );
};

export default Content;
