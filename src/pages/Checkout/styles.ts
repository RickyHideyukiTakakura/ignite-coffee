import styled from "styled-components";

export const CheckoutContainer = styled.main`
  display: flex;
  gap: 2rem;
`;

export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const AddressAndPaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const Address = styled.div`
  width: 40rem;
  height: 23.25rem;

  padding: 2.5rem;

  border-radius: 6px;
  background: ${(props) => props.theme["base-card"]};
`;

export const Payment = styled.div`
  width: 40rem;
  height: 13rem;

  padding: 2.5rem;

  border-radius: 6px;

  background: ${(props) => props.theme["base-card"]};
`;

export const Cart = styled.div`
  width: 28rem;
  height: 31.25rem;

  border-radius: 6px 44px 6px 44px;

  background: ${(props) => props.theme["base-card"]};
`;

const BaseInfo = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;

  p {
    font-size: 1rem;
    line-height: 130%;
    color: ${(props) => props.theme["base-subtitle"]};
  }

  span {
    font-size: 0.875rem;
    line-height: 130%;
    color: ${(props) => props.theme["base-text"]};
  }
`;

export const AddressInfo = styled(BaseInfo)`
  svg {
    color: ${(props) => props.theme["yellow-dark"]};
  }
`;

export const PaymentInfo = styled(BaseInfo)`
  svg {
    color: ${(props) => props.theme["purple"]};
  }
`;

export const AddressForm = styled.form`
  margin-top: 2rem;

  display: grid;
  grid-template-columns: 200px auto 60px;

  gap: 1rem 0.75rem;

  /* grid-template-areas:
    "cep undefined undefined"
    "street street street"
    "number complement complement"
    "neighborhood city uf"; */

  .zip-code {
    grid-column: 1;
    grid-row: 1;
  }

  .street {
    grid-column: span 3;
    grid-row: 2;
  }

  .number {
    grid-column: 1;
    grid-row: 3;
  }

  .complement {
    grid-column: 2 / span 2;
    grid-row: 3;
  }

  .neighborhood {
    grid-column: 1;
    grid-row: 4;
  }

  .city {
    grid-column: 2;
    grid-row: 4;
  }

  .state {
    grid-column: 3;
    grid-row: 4;
  }
`;

export const PaymentMethod = styled.div`
  margin-top: 2rem;

  display: flex;
  align-items: center;
  gap: 0.75rem;

  button {
    flex: 1;
  }
`;

export const Total = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  padding: 2.5rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span:first-child {
      font-size: 0.875rem;
      line-height: 130%;
      color: ${(props) => props.theme["base-text"]};
    }

    span:last-child {
      font-size: 1rem;
      line-height: 130%;
      color: ${(props) => props.theme["base-text"]};
    }

    strong {
      font-size: 1.25rem;
      font-weight: 700;
      line-height: 130%;
      color: ${(props) => props.theme["base-subtitle"]};
    }
  }
`;
