import { MapPin, ShoppingCart } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo-coffee.svg";
import { HeaderContainer, Location, Navigation } from "./styles";

export function Header() {
  const navigate = useNavigate();

  function handleNavigateToCheckout() {
    navigate("/checkout");
  }

  return (
    <HeaderContainer>
      <img src={Logo} alt="" />

      <Navigation>
        <Location>
          <MapPin size={22} weight="fill" />
          <span>Ponta Grossa, PR</span>
        </Location>

        <button onClick={handleNavigateToCheckout}>
          <ShoppingCart size={22} weight="fill" />
          <strong>3</strong>
        </button>
      </Navigation>
    </HeaderContainer>
  );
}
