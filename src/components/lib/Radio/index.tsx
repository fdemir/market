import React, { useContext } from "react";
import styled from "styled-components";
import { RadioContext } from "../RadioGroup";
import { ReactComponent as Checkmark } from "~/assets/checkmark.svg";

const CheckmarkIcon = styled(Checkmark)`
  transition: all 0.2s ease-in-out;
  opacity: 0;
`;

const StyledRadioCircle = styled.div`
  width: 22px;
  height: 22px;
  border: 2px solid ${({ theme }) => theme.colors.februraryFrost};
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.primary};
  transition: all 0.2s ease-in-out;
`;

const StyledRadioWrapper = styled.label`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;

  &:focus {
    outline: none;

    ${StyledRadioCircle} {
      border-color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const StyledRadio = styled.input`
  &:checked ~ ${StyledRadioCircle} ${CheckmarkIcon} {
    opacity: 1;
  }

  &:checked ~ ${StyledRadioCircle} {
    border: 2px solid ${({ theme }) => theme.colors.primary};
  }
`;

const RadioLabel = styled.span`
  user-select: none;
`;

interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Radio: React.FC<RadioProps> = ({ value, name, label }) => {
  const ctx = useContext(RadioContext);
  if (!ctx) {
    throw new Error(
      "Radio must be used within RadioGroup! Standalone implement later!"
    );
  }

  const idName = name + `-radio`;

  return (
    <StyledRadioWrapper htmlFor={idName} tabIndex={0}>
      <StyledRadio
        hidden
        type="radio"
        onChange={ctx.onChange}
        value={value}
        name={name}
        id={idName}
        checked={ctx.value === value}
      />
      <StyledRadioCircle>
        <CheckmarkIcon />
      </StyledRadioCircle>

      <RadioLabel>{label}</RadioLabel>
    </StyledRadioWrapper>
  );
};

Radio.defaultProps = {
  value: "",
  label: "",
  name: "",
};

export default Radio;
