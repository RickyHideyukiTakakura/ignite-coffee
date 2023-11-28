import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPin,
  Money,
} from "phosphor-react";
import { ButtonSelect } from "../../components/ButtonSelect";
import { InputText } from "../../components/InputText";
import {
  Address,
  AddressAndPaymentContainer,
  AddressForm,
  AddressInfo,
  Cart,
  CheckoutContainer,
  Payment,
  PaymentInfo,
  PaymentMethod,
  SectionContainer,
  Total,
} from "./styles";

export function Checkout() {
  return (
    <CheckoutContainer>
      <SectionContainer>
        <strong>Complete seu pedido</strong>

        <AddressAndPaymentContainer>
          <Address>
            <AddressInfo>
              <MapPin size={22} />
              <div>
                <p>Endereço de Entrega</p>
                <span>Informe o endereço onde deseja receber seu pedido</span>
              </div>
            </AddressInfo>

            <AddressForm>
              <InputText className="zip-code" type="text" placeholder="CEP" />
              <InputText className="street" type="text" placeholder="Rua" />
              <InputText className="number" type="text" placeholder="Número" />
              <InputText
                className="complement"
                type="text"
                placeholder="Complemento"
              />
              <InputText
                className="neighborhood"
                type="text"
                placeholder="Bairro"
              />
              <InputText className="city" type="text" placeholder="Cidade" />
              <InputText className="state" type="text" placeholder="UF" />
            </AddressForm>
          </Address>

          <Payment>
            <PaymentInfo>
              <CurrencyDollar size={22} />
              <div>
                <p>Pagamento</p>
                <span>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </span>
              </div>
            </PaymentInfo>

            <PaymentMethod>
              <ButtonSelect>
                <CreditCard />
                CARTÃO DE CRÉDITO
              </ButtonSelect>
              <ButtonSelect>
                <Bank />
                CARTÃO DE DÉBITO
              </ButtonSelect>
              <ButtonSelect>
                <Money />
                DINHEIRO
              </ButtonSelect>
            </PaymentMethod>
          </Payment>
        </AddressAndPaymentContainer>
      </SectionContainer>

      <SectionContainer>
        <strong>Cafés selecionados</strong>
        <Cart>
          <div></div>

          <Total>
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
          </Total>
        </Cart>
      </SectionContainer>
    </CheckoutContainer>
  );
}
