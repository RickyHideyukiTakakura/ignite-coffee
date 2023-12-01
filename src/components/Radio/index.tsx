import { InputHTMLAttributes, ReactNode, forwardRef } from "react";
import * as S from "./styles";

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  children: ReactNode;
  isSelected?: boolean;
}

// Utilizando React.forwardRef para encaminhar o ref corretamente
export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ children, isSelected, ...rest }, ref) => {
    return (
      <S.RadioContainer data-state={isSelected}>
        <input {...rest} ref={ref} type="radio" />
        {children}
      </S.RadioContainer>
    );
  }
);
