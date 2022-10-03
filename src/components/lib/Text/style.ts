import styled from "styled-components";

const StyledText = styled.span<any>`
  color: ${({ theme, color }) => theme.colors?.[color] || "inherit"};
  font-size: ${({ theme, size }) =>
    theme.typography.fontSize?.[size] || "inherit"};
  font-weight: ${({ theme, fw }) =>
    theme.typography.fontWeight?.[fw] || "inherit"};
`;

export { StyledText };
