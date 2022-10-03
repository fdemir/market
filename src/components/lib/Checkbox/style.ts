import styled from "styled-components";

const CheckboxWrapper = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: flex-start;
  user-select: none;
`;

const CheckboxLabel = styled.span`
  margin-left: ${({ theme }) => theme.spacing[1]};
  flex-shrink: 1;
`;

const CheckboxMark = styled.div<{ checked: boolean }>`
  width: 22px;
  height: 22px;
  box-shadow: 0px 1px 7px rgba(93, 56, 192, 0.4);
  border-radius: ${(props) => props.theme.borderRadius.sm};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme, checked }) =>
    checked ? theme.colors.white : "transparent"};
  background-color: ${({ theme, checked }) =>
    checked ? theme.colors.primary : theme.colors.white};
  transition: all 0.2s ease-in-out;
  flex-shrink: 0;
`;

export { CheckboxWrapper, CheckboxLabel, CheckboxMark };
