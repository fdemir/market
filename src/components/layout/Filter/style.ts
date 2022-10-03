import styled from "styled-components";

const FilterButton = styled.button`
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  padding: 8px;
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  margin-bottom: 30px;
  background-color: ${({ theme }) => theme.colors.purpleLight};
  color: ${({ theme }) => theme.colors.primary};
`;

export { FilterButton };
