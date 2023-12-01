import { FieldError, useFormContext } from "react-hook-form";
import { InputText } from "../../../components/InputText";
import * as S from "./styles";

export function AddressForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <S.AddressForm>
      <InputText
        className="zip-code"
        type="number"
        placeholder="CEP"
        error={errors.cep as FieldError}
        {...register("cep", { valueAsNumber: true })}
      />
      <InputText
        className="street"
        type="text"
        placeholder="Rua"
        error={errors.street as FieldError}
        {...register("street")}
      />
      <InputText
        className="number"
        type="text"
        placeholder="Número"
        error={errors.number as FieldError}
        {...register("number")}
      />
      <InputText
        className="complement"
        type="text"
        placeholder="Complemento"
        optional
        {...register("complement")}
      />
      <InputText
        className="neighborhood"
        type="text"
        placeholder="Bairro"
        error={errors.neighborhood as FieldError}
        {...register("neighborhood")}
      />
      <InputText
        className="city"
        type="text"
        placeholder="Cidade"
        error={errors.city as FieldError}
        {...register("city")}
      />
      <InputText
        className="state"
        type="text"
        maxLength={2}
        placeholder="UF"
        error={errors.state as FieldError}
        {...register("state")}
      />
    </S.AddressForm>
  );
}
