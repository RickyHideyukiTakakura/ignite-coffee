import { zodResolver } from "@hookform/resolvers/zod";
import { CurrencyDollar, MapPin, Trash } from "phosphor-react";
import { FormProvider, useForm } from "react-hook-form";
import * as zod from "zod";
import { InputNumber } from "../../components/InputNumber";
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

type NewOrderFormData = zod.infer<typeof newOrderFormValidationSchema>;

export function Checkout() {
  // const navigate = useNavigate();

  const newOrderForm = useForm<NewOrderFormData>({
    resolver: zodResolver(newOrderFormValidationSchema),
  });

  const {
    handleSubmit,
    formState: { errors },
  } = newOrderForm;

  // function handleNavigateToSuccess() {
  //   navigate("/success");
  // }

  function handleCreateNewOrder(data: NewOrderFormData) {
    console.log("aqui");
    // const newOrder: NewOrderFormData = {
    //   cep: data.cep,
    //   street: data.street,
    //   number: data.number,
    //   complement: data.complement,
    //   neighborhood: data.neighborhood,
    //   city: data.city,
    //   state: data.state,
    //   paymentMethod: data.paymentMethod,
    // };

    console.log(data);
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
          <>
            <S.CoffeeCardContainer>
              <S.CoffeeInfo>
                <img src="" alt="" />

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
                <img src="" alt="" />

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

          <S.ConfirmOrderButton type="submit" form="order">
            Confirmar Pedido
          </S.ConfirmOrderButton>
        </S.Cart>
      </S.SectionContainer>
    </S.CheckoutContainer>
  );
}
