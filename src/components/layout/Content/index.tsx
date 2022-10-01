import styled from "styled-components";
import Card from "~/components/lib/Card";
import Text from "~/components/lib/Text";
import Pagination from "~/components/shared/Pagination";
import ProductList from "~/components/shared/ProductList";
import SelectItemType from "~/components/shared/SelectItemType";

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[2]};
  row-gap: 20px;
`;

const Content = () => {
  return (
    <StyledContent>
      <Text size="lg" color="secondary">
        Products
      </Text>
      <SelectItemType />
      <Card>
        <ProductList />
      </Card>
      <Pagination />
    </StyledContent>
  );
};

export default Content;
