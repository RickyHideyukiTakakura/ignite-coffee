import { MapPin, ShoppingCart } from "phosphor-react";
import Logo from "../../assets/logo-coffee.svg";
import { HeaderContainer, Location, Navigation } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} alt="" />

      <Navigation>
        <Location>
          <MapPin size={22} weight="fill" />
          <span>Ponta Grossa, PR</span>
        </Location>

        <button>
          <ShoppingCart size={22} weight="fill" />
          <strong>3</strong>
        </button>
      </Navigation>
    </HeaderContainer>
  );
}
