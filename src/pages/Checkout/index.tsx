import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPin,
  Money,
  Trash,
} from "phosphor-react";
import CoffeeImage from "../../assets/express-coffee.png";
import { InputNumber } from "../../components/InputNumber";
import { InputText } from "../../components/InputText";
import { Radio } from "../../components/Radio";
import {
  Address,
  AddressAndPaymentContainer,
  AddressForm,
  AddressInfo,
  Cart,
  CheckoutContainer,
  CoffeeActions,
  CoffeeCardContainer,
  CoffeeInfo,
  ConfirmOrderButton,
  DeleteCoffeeButton,
  Payment,
  PaymentInfo,
  PaymentMethod,
  SectionContainer,
  Separator,
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
                optional
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
            </PaymentMethod>
          </Payment>
        </AddressAndPaymentContainer>
      </SectionContainer>

      <SectionContainer>
        <strong>Cafés selecionados</strong>
        <Cart>
          <>
            <CoffeeCardContainer>
              <CoffeeInfo>
                <img src={CoffeeImage} alt="" />

                <div>
                  <span>Expresso Tradicional</span>

                  <CoffeeActions>
                    <InputNumber />

                    <DeleteCoffeeButton>
                      <Trash size={16} />
                      Remover
                    </DeleteCoffeeButton>
                  </CoffeeActions>
                </div>
              </CoffeeInfo>

              <strong>$ 9,90</strong>
            </CoffeeCardContainer>

            <Separator />
          </>

          <>
            <CoffeeCardContainer>
              <CoffeeInfo>
                <img src={CoffeeImage} alt="" />

                <div>
                  <span>Expresso Tradicional</span>

                  <CoffeeActions>
                    <InputNumber />

                    <DeleteCoffeeButton>
                      <Trash size={16} />
                      REMOVER
                    </DeleteCoffeeButton>
                  </CoffeeActions>
                </div>
              </CoffeeInfo>

              <strong>$ 9,90</strong>
            </CoffeeCardContainer>

            <Separator />
          </>

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

          <ConfirmOrderButton>Confirmar Pedido</ConfirmOrderButton>
        </Cart>
      </SectionContainer>
    </CheckoutContainer>
  );
}
