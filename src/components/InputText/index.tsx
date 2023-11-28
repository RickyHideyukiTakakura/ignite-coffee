import { InputHTMLAttributes } from "react";
import { InputTextContainer } from "./styles";

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {}

export function InputText({ ...rest }: InputTextProps) {
  return <InputTextContainer {...rest} />;
}
