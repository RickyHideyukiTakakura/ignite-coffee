import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import DeliveryImage from "../../assets/delivery.png";
import * as S from "./styles";

export function Success() {
  return (
    <S.SuccessContainer>
      <S.Order>
        <S.OrderHeading>
          <h2>Uhu! Pedido confirmado</h2>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </S.OrderHeading>

        <S.InfoBorderContainer>
          <S.InfoContainer>
            <S.InfoLocation>
              <div>
                <MapPin weight="fill" />
              </div>
              <span>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                <p>Farrapos - Porto Alegre, RS</p>
              </span>
            </S.InfoLocation>

            <S.InfoTimer>
              <div>
                <Timer weight="fill" />
              </div>
              <span>
                Previsão de entrega
                <strong>20 min - 30 min</strong>
              </span>
            </S.InfoTimer>

            <S.InfoPayment>
              <div>
                <CurrencyDollar weight="fill" />
              </div>
              <span>
                Pagamento na entrega
                <strong>Cartão de Crédito</strong>
              </span>
            </S.InfoPayment>
          </S.InfoContainer>
        </S.InfoBorderContainer>
      </S.Order>

      <img src={DeliveryImage} alt="" />
    </S.SuccessContainer>
  );
}
