import styled from "styled-components";

const StyledInput = styled.input`
  border: 2px solid ${(props) => props.theme.colors.gray};
  border-radius: ${(props) => props.theme.borderRadius.sm};
  padding: 12px 16px;
  width: 100%;
  outline: none;

  &::placeholder {
    color: ${(props) => props.theme.colors.grayAlt};
  }

  &:focus {
    border-color: ${(props) => props.theme.colors.primary};
  }
`;

export { StyledInput };
