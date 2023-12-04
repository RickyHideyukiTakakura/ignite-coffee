import { zodResolver } from "@hookform/resolvers/zod";
import { CurrencyDollar, MapPin, Trash } from "phosphor-react";
import { Fragment, useContext, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import * as zod from "zod";
import { InputNumber } from "../../components/InputNumber";
import { CoffeeContext } from "../../contexts/CoffeeContext";
import { AddressForm } from "./AddressForm";
import { PaymentMethod } from "./PaymentMethod";
import * as S from "./styles";

const newOrderFormValidationSchema = zod.object({
  cep: zod.number({ invalid_type_error: "Informe o CEP" }),
  street: zod.string().min(1, "Informe a Rua"),
  number: zod.string().min(1, "Informe o Número"),
  complement: zod.string(),
  neighborhood: zod.string().min(1, "Informe o Bairro"),
  city: zod.string().min(1, "Informe a Cidade"),
  state: zod.string().min(1, "Informe a UF"),
  paymentMethod: zod.enum(["credit", "debit", "cash"], {
    invalid_type_error: "Informe um método de pagamento",
  }),
});

export type NewOrderFormData = zod.infer<typeof newOrderFormValidationSchema>;

export function Checkout() {
  const { coffeesInCart, createNewOrder } = useContext(CoffeeContext);
  const [quantity, setQuantity] = useState(1);

  const newOrderForm = useForm<NewOrderFormData>({
    resolver: zodResolver(newOrderFormValidationSchema),
  });

  const {
    handleSubmit,
    formState: { errors },
  } = newOrderForm;

  function handleCreateNewOrder(data: NewOrderFormData) {
    createNewOrder(data);
  }

  function handleDecreaseQuantity() {
    if (quantity > 1) {
      setQuantity((quantity) => quantity - 1);
    }
  }

  function handleIncreaseQuantity() {
    setQuantity((quantity) => quantity + 1);
  }

  return (
    <S.CheckoutContainer>
      <S.SectionContainer>
        <strong>Complete seu pedido</strong>

        <S.FormContainer
          id="order"
          onSubmit={handleSubmit(handleCreateNewOrder)}
        >
          <FormProvider {...newOrderForm}>
            <S.AddressContainer>
              <S.AddressInfo>
                <MapPin size={22} />
                <div>
                  <p>Endereço de Entrega</p>
                  <span>Informe o endereço onde deseja receber seu pedido</span>
                </div>
              </S.AddressInfo>

              <AddressForm />
            </S.AddressContainer>

            <S.PaymentContainer>
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

              <PaymentMethod error={errors.paymentMethod} />
            </S.PaymentContainer>
          </FormProvider>
        </S.FormContainer>
      </S.SectionContainer>

      <S.SectionContainer>
        <strong>Cafés selecionados</strong>
        <S.Cart>
          {coffeesInCart.map((coffee) => {
            return (
              <Fragment key={coffee.id}>
                <S.CoffeeCardContainer>
                  <S.CoffeeInfo>
                    <img src={coffee.image} />

                    <div>
                      <span>{coffee.title}</span>

                      <S.CoffeeActions>
                        <InputNumber
                          handleDecreaseQuantity={handleDecreaseQuantity}
                          handleIncreaseQuantity={handleIncreaseQuantity}
                          quantity={quantity}
                        />

                        <S.DeleteCoffeeButton>
                          <Trash size={16} />
                          Remover
                        </S.DeleteCoffeeButton>
                      </S.CoffeeActions>
                    </div>
                  </S.CoffeeInfo>

                  <strong>R$ {coffee.price.toFixed(2)}</strong>
                </S.CoffeeCardContainer>

                <S.Separator />
              </Fragment>
            );
          })}

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

          <S.ConfirmOrderButton type="submit" form="order">
            Confirmar Pedido
          </S.ConfirmOrderButton>
        </S.Cart>
      </S.SectionContainer>
    </S.CheckoutContainer>
  );
}
