import { ShoppingCart } from "phosphor-react";
import { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import { InputNumber } from "../InputNumber";
import * as S from "./styles";

export interface CoffeeCardProps {
  coffee: {
    id: string;
    title: string;
    description: string;
    tags: string[];
    price: number;
    image: string;
  };
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const { addCoffeeInCart } = useContext(CartContext);

  const [quantity, setQuantity] = useState(1);

  function handleDecreaseQuantity() {
    if (quantity > 1) {
      setQuantity((quantity) => quantity - 1);
    }
  }

  function handleIncreaseQuantity() {
    setQuantity((quantity) => quantity + 1);
  }

  function handleAddCoffeeInCart() {
    addCoffeeInCart(coffee, quantity);
  }

  return (
    <S.CoffeeCardContainer>
      <img src={coffee.image} alt="" />

      <div>
        {coffee.tags.map((tag) => {
          return <strong key={tag}>{tag}</strong>;
        })}
      </div>

      <h4>{coffee.title}</h4>
      <p>{coffee.description}</p>

      <S.BuyContainer>
        <span>
          R$ <strong>{coffee.price.toFixed(2)}</strong>
        </span>

        <InputNumber
          handleDecreaseQuantity={handleDecreaseQuantity}
          handleIncreaseQuantity={handleIncreaseQuantity}
          quantity={quantity}
        />

        <button onClick={handleAddCoffeeInCart}>
          <ShoppingCart size={22} weight="fill" />
        </button>
      </S.BuyContainer>
    </S.CoffeeCardContainer>
  );
}
