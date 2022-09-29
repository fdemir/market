import styled from "styled-components";
import Card from "~/components/lib/Card";
import Text from "~/components/lib/Text";
import ProductItem from "~/components/shared/ProductItem";

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[2]};
  row-gap: 20px;
`;

const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ theme }) => theme.spacing[3]};
`;

const Content = () => {
  return (
    <StyledContent>
      <Text size="lg" color="secondary">
        Products
      </Text>
      <Card>
        <ProductList>
          {Array(16)
            .fill(0)
            .map((item) => (
              <ProductItem key={item} />
            ))}
        </ProductList>
      </Card>
    </StyledContent>
  );
};

export default Content;
