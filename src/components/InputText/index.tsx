import { InputHTMLAttributes, forwardRef } from "react";
import { FieldError } from "react-hook-form";
import * as S from "./styles";

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  optional?: boolean;
  error?: FieldError;
}

// Usando React.forwardRef para encaminhar o ref corretamente
export const InputText = forwardRef<HTMLInputElement, InputTextProps>(
  ({ className, optional, error, ...rest }, ref) => {
    return (
      <S.Container className={className}>
        <S.InputTextContainer>
          <input {...rest} ref={ref} />
          {optional && <span>Opcional</span>}
        </S.InputTextContainer>

        {error && <S.MessageError>{error.message}</S.MessageError>}
      </S.Container>
    );
  }
);
