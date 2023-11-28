import { ButtonHTMLAttributes } from "react";
import { ButtonSelectContainer } from "./styles";

interface ButtonSelectProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function ButtonSelect({ ...rest }: ButtonSelectProps) {
  return <ButtonSelectContainer {...rest} />;
}
