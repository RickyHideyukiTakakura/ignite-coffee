import { MapPin, ShoppingCart } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo-coffee.svg";
import * as S from "./styles";

export function Header() {
  const navigate = useNavigate();

  function handleNavigateToCheckout() {
    navigate("/checkout");
  }

  return (
    <S.HeaderContainer>
      <a href="/">
        <img src={Logo} alt="" />
      </a>

      <S.Navigation>
        <S.Location>
          <MapPin size={22} weight="fill" />
          <span>Ponta Grossa, PR</span>
        </S.Location>

        <button onClick={handleNavigateToCheckout}>
          <ShoppingCart size={22} weight="fill" />
          <strong>3</strong>
        </button>
      </S.Navigation>
    </S.HeaderContainer>
  );
}
