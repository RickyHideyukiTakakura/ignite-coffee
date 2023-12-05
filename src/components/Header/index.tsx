import { MapPin, ShoppingCart } from "phosphor-react";
import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo-coffee.svg";
import { CoffeeContext } from "../../contexts/CoffeeContext";
import * as S from "./styles";

export function Header() {
  const { coffeesInCart } = useContext(CoffeeContext);

  const navigate = useNavigate();

  function handleNavigateToCheckout() {
    navigate("/checkout");
  }

  return (
    <S.HeaderContainer>
      <NavLink to="/">
        <img src={Logo} />
      </NavLink>

      <S.Navigation>
        <S.Location>
          <MapPin size={22} weight="fill" />
          <span>Ponta Grossa, PR</span>
        </S.Location>

        <button onClick={handleNavigateToCheckout}>
          <ShoppingCart size={22} weight="fill" />
          {coffeesInCart.length !== 0 && (
            <strong>{coffeesInCart.length}</strong>
          )}
        </button>
      </S.Navigation>
    </S.HeaderContainer>
  );
}
