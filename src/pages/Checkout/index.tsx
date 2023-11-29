import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPin,
  Money,
  Trash,
} from "phosphor-react";
import { useNavigate } from "react-router-dom";
import CoffeeImage from "../../assets/express-coffee.png";
import { InputNumber } from "../../components/InputNumber";
import { InputText } from "../../components/InputText";
import { Radio } from "../../components/Radio";
import * as S from "./styles";

export function Checkout() {
  const navigate = useNavigate();

  function handleNavigateToSuccess() {
    navigate("/success");
  }

  return (
    <S.CheckoutContainer>
      <S.SectionContainer>
        <strong>Complete seu pedido</strong>

        <S.AddressAndPaymentContainer>
          <S.Address>
            <S.AddressInfo>
              <MapPin size={22} />
              <div>
                <p>Endereço de Entrega</p>
                <span>Informe o endereço onde deseja receber seu pedido</span>
              </div>
            </S.AddressInfo>

            <S.AddressForm>
              <InputText className="zip-code" type="text" placeholder="CEP" />
              <InputText className="street" type="text" placeholder="Rua" />
              <InputText className="number" type="text" placeholder="Número" />
              <InputText
                className="complement"
                type="text"
                placeholder="Complemento"
                optional
              />
              <InputText
                className="neighborhood"
                type="text"
                placeholder="Bairro"
              />
              <InputText className="city" type="text" placeholder="Cidade" />
              <InputText className="state" type="text" placeholder="UF" />
            </S.AddressForm>
          </S.Address>

          <S.Payment>
            <S.PaymentInfo>
              <CurrencyDollar size={22} />
              <div>
                <p>Pagamento</p>
                <span>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </span>
              </div>
            </S.PaymentInfo>

            <S.PaymentMethod>
              <Radio isSelected>
                <CreditCard />
                Cartão de crédito
              </Radio>
              <Radio>
                <Bank />
                Cartão de débito
              </Radio>
              <Radio>
                <Money />
                Dinheiro
              </Radio>
            </S.PaymentMethod>
          </S.Payment>
        </S.AddressAndPaymentContainer>
      </S.SectionContainer>

      <S.SectionContainer>
        <strong>Cafés selecionados</strong>
        <S.Cart>
          <>
            <S.CoffeeCardContainer>
              <S.CoffeeInfo>
                <img src={CoffeeImage} alt="" />

                <div>
                  <span>Expresso Tradicional</span>

                  <S.CoffeeActions>
                    <InputNumber />

                    <S.DeleteCoffeeButton>
                      <Trash size={16} />
                      Remover
                    </S.DeleteCoffeeButton>
                  </S.CoffeeActions>
                </div>
              </S.CoffeeInfo>

              <strong>$ 9,90</strong>
            </S.CoffeeCardContainer>

            <S.Separator />
          </>

          <>
            <S.CoffeeCardContainer>
              <S.CoffeeInfo>
                <img src={CoffeeImage} alt="" />

                <div>
                  <span>Expresso Tradicional</span>

                  <S.CoffeeActions>
                    <InputNumber />

                    <S.DeleteCoffeeButton>
                      <Trash size={16} />
                      REMOVER
                    </S.DeleteCoffeeButton>
                  </S.CoffeeActions>
                </div>
              </S.CoffeeInfo>

              <strong>$ 9,90</strong>
            </S.CoffeeCardContainer>

            <S.Separator />
          </>

          <S.Total>
            <div>
              <span>Total de itens</span>
              <span>R$ 29,70</span>
            </div>
            <div>
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </div>
            <div>
              <strong>Total</strong>
              <strong>R$ 33,20</strong>
            </div>
          </S.Total>

          <S.ConfirmOrderButton onClick={handleNavigateToSuccess}>
            Confirmar Pedido
          </S.ConfirmOrderButton>
        </S.Cart>
      </S.SectionContainer>
    </S.CheckoutContainer>
  );
}
