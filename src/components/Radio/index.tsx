import { InputHTMLAttributes, ReactNode } from "react";
import * as S from "./styles";

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  children: ReactNode;
  isSelected?: boolean;
}

export function Radio({ children, isSelected = false, ...rest }: RadioProps) {
  return (
    <S.RadioContainer data-state={isSelected}>
      <input {...rest} type="radio" />
      {children}
    </S.RadioContainer>
  );
}
