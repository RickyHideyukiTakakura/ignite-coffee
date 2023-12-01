import { Bank, CreditCard, Money } from "phosphor-react";
import { FieldError, useFormContext } from "react-hook-form";
import { Radio } from "../../../components/Radio";
import * as S from "./styles";

interface PaymentMethodProps {
  error?: FieldError;
}

export function PaymentMethod({ error }: PaymentMethodProps) {
  const { watch, register } = useFormContext();

  const paymentMethodSelected = watch("paymentMethod");

  watch();

  return (
    <S.Container>
      <S.PaymentMethod>
        <Radio
          isSelected={paymentMethodSelected === "credit"}
          {...register("paymentMethod")}
          value="credit"
        >
          <CreditCard />
          Cartão de crédito
        </Radio>
        <Radio
          isSelected={paymentMethodSelected === "debit"}
          {...register("paymentMethod")}
          value="debit"
        >
          <Bank />
          Cartão de débito
        </Radio>
        <Radio
          isSelected={paymentMethodSelected === "cash"}
          {...register("paymentMethod")}
          value="cash"
        >
          <Money />
          Dinheiro
        </Radio>
      </S.PaymentMethod>

      {error && <S.MessageError>{error.message}</S.MessageError>}
    </S.Container>
  );
}
