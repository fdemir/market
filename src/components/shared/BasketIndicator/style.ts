import styled from "styled-components";

const StyledBasketIndicator = styled.div`
  background-color: ${(props) => props.theme.colors.primaryDarken};
  padding: 0 ${(props) => props.theme.spacing[3]};
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.white};
  min-width: 129px;
  gap: 10px;
`;

export { StyledBasketIndicator };
