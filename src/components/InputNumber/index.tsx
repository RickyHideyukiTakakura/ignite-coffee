import { Minus, Plus } from "phosphor-react";
import { Button, InputNumberContainer } from "./styles";

export function InputNumber() {
  return (
    <InputNumberContainer>
      <Button>
        <Minus weight="bold" />
      </Button>
      <span>1</span>
      <Button>
        <Plus weight="bold" />
      </Button>
    </InputNumberContainer>
  );
}
