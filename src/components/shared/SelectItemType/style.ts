import styled from "styled-components";

const TypeButton = styled.button<{ active: boolean }>`
  background: ${({ theme, active }) =>
    active ? theme.colors.primary : theme.colors.purpleLight};
  padding: 6px 16px;
  color: ${({ theme, active }) =>
    active ? theme.colors.white : theme.colors.primary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};

  &:not(:last-child) {
    margin-right: ${({ theme }) => theme.spacing[1]};
  }
`;

export { TypeButton };
