import { CurrencyDollar, MapPin } from "phosphor-react";
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
              <input className="zip-code" type="text" placeholder="CEP" />
              <input className="street" type="text" placeholder="Rua" />
              <input className="number" type="text" placeholder="Número" />
              <input
                className="complement"
                type="text"
                placeholder="Complemento"
              />
              <input
                className="neighborhood"
                type="text"
                placeholder="Bairro"
              />
              <input className="city" type="text" placeholder="Cidade" />
              <input className="state" type="text" placeholder="UF" />
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
              <button>Cartao 1</button>
              <button>Cartao 2</button>
              <button>Cartao 3</button>
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
