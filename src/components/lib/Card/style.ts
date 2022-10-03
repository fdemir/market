import styled from "styled-components";

const StyledCard = styled.div<any>`
  padding: 24px;
  border-radius: ${({ rounded, theme }) =>
    theme.borderRadius?.[rounded] || theme.borderRadius.base};
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 6px 24px rgba(93, 62, 188, 0.04);
`;

export { StyledCard };
