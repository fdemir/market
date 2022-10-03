import styled from "styled-components";
import Text from "~/components/lib/Text";

const StyledBasketItem = styled.div`
  width: 100%;
  display: flex;
  padding: 18px 0;
  border-bottom: 1px solid #f4f4f4;
  justify-content: space-between;
  gap: 10px;

  &:first-child {
    padding-top: 0;
  }
`;

const StyledItemCount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

const StyledItemQuantityText = styled(Text)`
  width: 32px;
  height: 32px;
  background-color: ${(props) => props.theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ControlButton = styled.button`
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`;

export {
  StyledBasketItem,
  StyledItemCount,
  StyledItemQuantityText,
  ControlButton,
};
