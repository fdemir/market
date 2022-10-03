import styled from "styled-components";

const StyledBasket = styled.div`
  width: 100%;
  border: 8px solid ${(props) => props.theme.colors.primary};
  border-radius: ${(props) => props.theme.borderRadius.sm};
`;

const TotalPrice = styled.div`
  padding: 17px 24px;
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: ${(props) => props.theme.borderRadius.sm};
  color: ${(props) => props.theme.colors.primary};
  margin-top: 24px;
  font-weight: ${(props) => props.theme.typography.fontWeight.semiBold};
`;

const BasketFooter = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export { StyledBasket, TotalPrice, BasketFooter };
