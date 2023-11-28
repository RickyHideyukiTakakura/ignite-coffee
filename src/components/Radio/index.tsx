import { InputHTMLAttributes, ReactNode } from "react";
import { RadioContainer } from "./styles";

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  children: ReactNode;
  isSelected?: boolean;
}

export function Radio({ children, isSelected = false, ...rest }: RadioProps) {
  return (
    <RadioContainer data-state={isSelected}>
      <input {...rest} type="radio" />
      {children}
    </RadioContainer>
  );
}
