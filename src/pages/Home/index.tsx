import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import CoffeeHomeImage from "../../assets/coffee-home.png";
import { CoffeeCard } from "../../components/CoffeeCard";
import {
  CoffeeFeature,
  CoffeeList,
  FeaturesContainer,
  HomeContainer,
  IntroContainer,
  IntroContent,
  PackageFeature,
  ShoppingFeature,
  TimerFeature,
} from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <IntroContainer>
        <IntroContent>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>

          <FeaturesContainer>
            <ShoppingFeature>
              <div>
                <ShoppingCart weight="fill" />
              </div>
              <span>Compra simples e segura</span>
            </ShoppingFeature>

            <PackageFeature>
              <div>
                <Package weight="fill" />
              </div>
              <span>Embalagem mantém o café intacto</span>
            </PackageFeature>

            <TimerFeature>
              <div>
                <Timer weight="fill" />
              </div>
              <span>Entrega rápida e rastreada</span>
            </TimerFeature>

            <CoffeeFeature>
              <div>
                <Coffee weight="fill" />
              </div>
              <span>Compra simples e segura</span>
            </CoffeeFeature>
          </FeaturesContainer>
        </IntroContent>

        <img src={CoffeeHomeImage} alt="" />
      </IntroContainer>

      <h2>Nossos cafés</h2>
      <CoffeeList>
        <CoffeeCard />
      </CoffeeList>
    </HomeContainer>
  );
}
