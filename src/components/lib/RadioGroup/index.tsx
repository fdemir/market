import React from "react";

interface RadioGroupProps {
  children: React.ReactNode;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export const RadioContext = React.createContext<RadioGroupProps | null>(null);

const RadioGroup: React.FC<RadioGroupProps> = (props) => {
  return (
    <RadioContext.Provider value={props}>
      {props.children}
    </RadioContext.Provider>
  );
};

RadioGroup.defaultProps = {
  onChange: () => {},
  value: "",
};

export default RadioGroup;
