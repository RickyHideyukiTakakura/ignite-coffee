import { Minus, Plus } from "phosphor-react";
import * as S from "./styles";

interface InputNumberProps {
  handleDecreaseQuantity: () => void;
  handleIncreaseQuantity: () => void;
  quantity: number;
}

export function InputNumber({
  handleDecreaseQuantity,
  handleIncreaseQuantity,
  quantity,
}: InputNumberProps) {
  return (
    <S.InputNumberContainer>
      <S.Button onClick={handleDecreaseQuantity}>
        <Minus weight="bold" />
      </S.Button>
      <span>{quantity}</span>
      <S.Button onClick={handleIncreaseQuantity}>
        <Plus weight="bold" />
      </S.Button>
    </S.InputNumberContainer>
  );
}
