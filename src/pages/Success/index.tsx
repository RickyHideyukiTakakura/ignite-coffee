import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { useContext } from "react";
import DeliveryImage from "../../assets/delivery.png";
import { CartContext } from "../../contexts/CartContext";
import * as S from "./styles";

export function Success() {
  const { order } = useContext(CartContext);
  const paymentMethod = {
    credit: "Cartão de crédito",
    debit: "Cartão de débito",
    cash: "Dinheiro",
  };

  if (!order) {
    return null;
  }

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
                Entrega em{" "}
                <strong>
                  {order.street}, {order.number}
                </strong>
                <p>
                  {order.neighborhood} - {order.city}, {order.state}
                </p>
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
                <strong>{paymentMethod[order.paymentMethod]}</strong>
              </span>
            </S.InfoPayment>
          </S.InfoContainer>
        </S.InfoBorderContainer>
      </S.Order>

      <img src={DeliveryImage} alt="" />
    </S.SuccessContainer>
  );
}
