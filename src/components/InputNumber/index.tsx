import { Minus, Plus } from "phosphor-react";
import * as S from "./styles";

export function InputNumber() {
  return (
    <S.InputNumberContainer>
      <S.Button>
        <Minus weight="bold" />
      </S.Button>
      <span>1</span>
      <S.Button>
        <Plus weight="bold" />
      </S.Button>
    </S.InputNumberContainer>
  );
}
