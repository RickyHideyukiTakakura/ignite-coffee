import { InputHTMLAttributes } from "react";
import { InputTextContainer } from "./styles";

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  optional?: boolean;
}

export function InputText({ className, optional, ...rest }: InputTextProps) {
  return (
    <InputTextContainer className={className}>
      <input {...rest} type="text" />
      {optional && <span>Opcional</span>}
    </InputTextContainer>
  );
}
