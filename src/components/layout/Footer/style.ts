import styled from "styled-components";

const StyledFooter = styled.footer`
  padding-bottom: 40px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.primary};
  gap: ${({ theme }) => theme.spacing[2]};
`;

export { StyledFooter };
