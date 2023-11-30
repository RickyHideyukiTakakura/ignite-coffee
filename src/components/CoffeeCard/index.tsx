import { ShoppingCart } from "phosphor-react";
import { InputNumber } from "../InputNumber";
import * as S from "./styles";

interface CoffeeCardProps {
  coffee: {
    title: string;
    description: string;
    tags: string[];
    price: number;
    image: string;
  };
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  return (
    <S.CoffeeCardContainer>
      <img src={coffee.image} alt="" />
      <div>
        {coffee.tags.map((tag) => {
          return <strong>{tag}</strong>;
        })}
      </div>

      <h4>{coffee.title}</h4>
      <p>{coffee.description}</p>

      <S.BuyContainer>
        <span>
          R$ <strong>{coffee.price.toFixed(2)}</strong>
        </span>
        <InputNumber />
        <button>
          <ShoppingCart size={22} weight="fill" />
        </button>
      </S.BuyContainer>
    </S.CoffeeCardContainer>
  );
}
