import { InputHTMLAttributes } from "react";
import * as S from "./styles";

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  optional?: boolean;
}

export function InputText({ className, optional, ...rest }: InputTextProps) {
  return (
    <S.InputTextContainer className={className}>
      <input {...rest} type="text" />
      {optional && <span>Opcional</span>}
    </S.InputTextContainer>
  );
}
