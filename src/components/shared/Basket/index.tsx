import styled from "styled-components";
import Card from "~/components/lib/Card";

const StyledBasket = styled.div`
  width: 100%;
  border: 8px solid ${(props) => props.theme.colors.primary};
  border-radius: ${(props) => props.theme.borderRadius.sm};
`;

const Basket = () => {
  return (
    <StyledBasket>
      <Card>dsadsa</Card>
    </StyledBasket>
  );
};

export default Basket;
