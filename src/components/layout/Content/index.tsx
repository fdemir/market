import styled from "styled-components";
import Card from "~/components/lib/Card";
import Text from "~/components/lib/Text";
import ProductList from "~/components/shared/ProductList";

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
      <Card>
        <ProductList />
      </Card>
    </StyledContent>
  );
};

export default Content;
