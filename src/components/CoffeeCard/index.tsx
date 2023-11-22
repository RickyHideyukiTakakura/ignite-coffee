import { ShoppingCart } from "phosphor-react";
import ExpressCoffeeImage from "../../assets/express-coffee.png";
import { BuyContainer, CoffeeCardContainer } from "./styles";

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <img src={ExpressCoffeeImage} alt="" />
      <strong>Tradicional</strong>
      <h4>Expresso Tradicional</h4>
      <p>O tradicional café feito com água quente e grãos moídos</p>

      <BuyContainer>
        <span>
          R$ <strong>9,90</strong>
        </span>
        <div>
          <span>+</span>
          <span>1</span>
          <span>-</span>
        </div>
        <button>
          <ShoppingCart size={22} weight="fill" />
        </button>
      </BuyContainer>
    </CoffeeCardContainer>
  );
}
