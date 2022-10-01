import { useRef, useState } from "react";
import styled from "styled-components";
import { ReactComponent as CheckmarkIcon } from "~/assets/checkmark.svg";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
}

const CheckboxWrapper = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: flex-start;
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

const Checkbox: React.FC<CheckboxProps> = ({ label, ...props }) => {
  return (
    <CheckboxWrapper tabIndex={0} role="checkbox">
      <input type="checkbox" hidden {...props} />
      <CheckboxMark checked={props.checked || false}>
        <CheckmarkIcon />
      </CheckboxMark>
      <CheckboxLabel>{label}</CheckboxLabel>
    </CheckboxWrapper>
  );
};

export default Checkbox;
