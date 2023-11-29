import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import CoffeeHomeImage from "../../assets/coffee-home.png";
import { CoffeeCard } from "../../components/CoffeeCard";
import * as S from "./styles";

export function Home() {
  return (
    <S.HomeContainer>
      <S.IntroContainer>
        <S.IntroContent>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>

          <S.FeaturesContainer>
            <S.ShoppingFeature>
              <div>
                <ShoppingCart weight="fill" />
              </div>
              <span>Compra simples e segura</span>
            </S.ShoppingFeature>

            <S.PackageFeature>
              <div>
                <Package weight="fill" />
              </div>
              <span>Embalagem mantém o café intacto</span>
            </S.PackageFeature>

            <S.TimerFeature>
              <div>
                <Timer weight="fill" />
              </div>
              <span>Entrega rápida e rastreada</span>
            </S.TimerFeature>

            <S.CoffeeFeature>
              <div>
                <Coffee weight="fill" />
              </div>
              <span>Compra simples e segura</span>
            </S.CoffeeFeature>
          </S.FeaturesContainer>
        </S.IntroContent>

        <img src={CoffeeHomeImage} alt="" />
      </S.IntroContainer>

      <h2>Nossos cafés</h2>
      <S.CoffeeList>
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
      </S.CoffeeList>
    </S.HomeContainer>
  );
}
