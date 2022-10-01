import React, { useContext } from "react";
import styled from "styled-components";
import { RadioContext } from "../RadioGroup";
import { ReactComponent as Checkmark } from "~/assets/checkmark.svg";

const StyledRadioWrapper = styled.label`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const StyledRadioCircle = styled.div`
  width: 22px;
  height: 22px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledRadio = styled.input`
  &:checked ~ .checkMark {
    display: block;
  }

  &:not(:checked) ~ .checkMark {
    display: none;
  }
`;

interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Radio: React.FC<RadioProps> = ({ value, name, label }) => {
  const ctx = useContext(RadioContext);
  // FIXME: it should work standalone, implement
  if (!ctx) {
    throw new Error("Radio must be used within RadioGroup");
  }

  const idName = name + `-radio`;

  return (
    <StyledRadioWrapper htmlFor={idName}>
      <StyledRadioCircle>
        <StyledRadio
          hidden
          type="radio"
          onChange={ctx.onChange}
          value={value}
          name={name}
          id={idName}
          checked={ctx.value == value}
        />
        <Checkmark className="checkMark" />
      </StyledRadioCircle>

      <span>{label}</span>
    </StyledRadioWrapper>
  );
};

Radio.defaultProps = {
  value: "",
  label: "",
  name: "",
};

export default Radio;
