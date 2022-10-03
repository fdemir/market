import React, { useContext } from "react";
import { RadioContext } from "../RadioGroup";
import {
  CheckmarkIcon,
  RadioLabel,
  StyledRadio,
  StyledRadioCircle,
  StyledRadioWrapper,
} from "./style";

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
