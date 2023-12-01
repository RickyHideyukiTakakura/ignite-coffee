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

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const AddressContainer = styled.div`
  width: 40rem;

  padding: 2.5rem;

  border-radius: 6px;
  background: ${(props) => props.theme["base-card"]};
`;

export const PaymentContainer = styled.div`
  width: 40rem;

  padding: 2.5rem;

  border-radius: 6px;

  background: ${(props) => props.theme["base-card"]};
`;

export const Cart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  width: 28rem;
  padding: 2.5rem;

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

export const Total = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

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

export const ConfirmOrderButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.75rem 0;

  border: none;
  border-radius: 6px;

  background: ${(props) => props.theme["yellow"]};
  color: ${(props) => props.theme["white"]};

  text-transform: uppercase;
  font-size: 0.875rem;
  line-height: 160%;

  transition: all 0.5s;

  &:hover {
    background: ${(props) => props.theme["yellow-dark"]};
  }
`;

export const CoffeeCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0.25rem;

  strong {
    font-size: 1rem;
    font-weight: 700;
    line-height: 130%;
    color: ${(props) => props.theme["base-text"]};
  }
`;

export const CoffeeInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;

  img {
    width: 4rem;
    height: 4rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    span {
      line-height: 130%;
      color: ${(props) => props.theme["base-subtitle"]};
    }
  }
`;

export const CoffeeActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const DeleteCoffeeButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  padding: 0.5rem;

  border: none;
  border-radius: 6px;
  background: ${(props) => props.theme["base-button"]};
  color: ${(props) => props.theme["base-text"]};

  text-transform: uppercase;
  font-size: 0.75rem;
  line-height: 160%;

  transition: all 0.5s;

  &:hover {
    background: ${(props) => props.theme["base-hover"]};
  }

  svg {
    color: ${(props) => props.theme["purple"]};
  }
`;

export const Separator = styled.div`
  height: 1px;
  width: 100%;

  background: ${(props) => props.theme["base-button"]};
`;
