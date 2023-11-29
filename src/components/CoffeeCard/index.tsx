import { ShoppingCart } from "phosphor-react";
import ExpressCoffeeImage from "../../assets/express-coffee.png";
import { InputNumber } from "../InputNumber";
import * as S from "./styles";

export function CoffeeCard() {
  return (
    <S.CoffeeCardContainer>
      <img src={ExpressCoffeeImage} alt="" />
      <strong>Tradicional</strong>
      <h4>Expresso Tradicional</h4>
      <p>O tradicional café feito com água quente e grãos moídos</p>

      <S.BuyContainer>
        <span>
          R$ <strong>9,90</strong>
        </span>
        <InputNumber />
        <button>
          <ShoppingCart size={22} weight="fill" />
        </button>
      </S.BuyContainer>
    </S.CoffeeCardContainer>
  );
}
