import { useRef } from "react";
import { ReactComponent as CheckmarkIcon } from "~/assets/checkmark.svg";
import { CheckboxLabel, CheckboxMark, CheckboxWrapper } from "./style";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, ...props }) => {
  const checkBoxRef = useRef<HTMLInputElement>(null);

  return (
    <CheckboxWrapper
      tabIndex={0}
      role="checkbox"
      onKeyUp={(event) => {
        if (event.code === "Enter") {
          checkBoxRef.current?.click();
        }
      }}
    >
      <input type="checkbox" hidden ref={checkBoxRef} {...props} />
      <CheckboxMark checked={props.checked || false}>
        <CheckmarkIcon />
      </CheckboxMark>
      <CheckboxLabel>{label}</CheckboxLabel>
    </CheckboxWrapper>
  );
};

export default Checkbox;
