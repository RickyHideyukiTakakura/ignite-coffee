import { zodResolver } from "@hookform/resolvers/zod";
import { CurrencyDollar, MapPin, Trash } from "phosphor-react";
import { Fragment, useContext } from "react";
import { FormProvider, useForm } from "react-hook-form";
import * as zod from "zod";
import { InputNumber } from "../../components/InputNumber";
import { CartContext } from "../../contexts/CartContext";
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
  const {
    coffeesInCart,
    removeCoffeeInCart,
    increaseQuantity,
    decreaseQuantity,
    createNewOrder,
  } = useContext(CartContext);

  const newOrderForm = useForm<NewOrderFormData>({
    resolver: zodResolver(newOrderFormValidationSchema),
  });

  const {
    handleSubmit,
    formState: { errors },
  } = newOrderForm;

  const shippingPrice = 3.5;

  const totalItemsPrice = coffeesInCart.reduce((total, currentItem) => {
    return total + currentItem.data.price * currentItem.quantity;
  }, 0);

  function handleCreateNewOrder(data: NewOrderFormData) {
    if (coffeesInCart.length === 0) {
      return alert("O carrinho está vazio");
    }

    createNewOrder(data);
  }

  function handleDecreaseQuantity(coffeeId: string) {
    decreaseQuantity(coffeeId);
  }

  function handleIncreaseQuantity(coffeeId: string) {
    increaseQuantity(coffeeId);
  }

  function handleRemoveCoffee(coffeeId: string) {
    removeCoffeeInCart(coffeeId);
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
              <Fragment key={coffee.data.id}>
                <S.CoffeeCardContainer>
                  <S.CoffeeInfo>
                    <img src={coffee.data.image} />

                    <div>
                      <span>{coffee.data.title}</span>

                      <S.CoffeeActions>
                        <InputNumber
                          handleDecreaseQuantity={() =>
                            handleDecreaseQuantity(coffee.data.id)
                          }
                          handleIncreaseQuantity={() =>
                            handleIncreaseQuantity(coffee.data.id)
                          }
                          quantity={coffee.quantity}
                        />

                        <S.DeleteCoffeeButton
                          onClick={() => handleRemoveCoffee(coffee.data.id)}
                        >
                          <Trash size={16} />
                          Remover
                        </S.DeleteCoffeeButton>
                      </S.CoffeeActions>
                    </div>
                  </S.CoffeeInfo>

                  <strong>R$ {coffee.data.price.toFixed(2)}</strong>
                </S.CoffeeCardContainer>

                <S.Separator />
              </Fragment>
            );
          })}

          <S.Total>
            <div>
              <span>Total de itens</span>
              <span>
                {new Intl.NumberFormat("pt-br", {
                  currency: "BRL",
                  style: "currency",
                }).format(totalItemsPrice)}
              </span>
            </div>
            <div>
              <span>Entrega</span>
              <span>
                {new Intl.NumberFormat("pt-br", {
                  currency: "BRL",
                  style: "currency",
                }).format(shippingPrice)}
              </span>
            </div>
            <div>
              <strong>Total</strong>
              <strong>
                {new Intl.NumberFormat("pt-br", {
                  currency: "BRL",
                  style: "currency",
                }).format(totalItemsPrice + shippingPrice)}
              </strong>
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
