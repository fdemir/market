import { StyledInput } from "./style";
import { InputHTMLAttributes } from "react";

const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return <StyledInput {...props} />;
};

export default Input;
