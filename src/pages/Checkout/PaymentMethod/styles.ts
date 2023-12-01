import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const PaymentMethod = styled.div`
  margin-top: 2rem;

  display: flex;
  align-items: center;
  gap: 0.75rem;

  label {
    flex: 1;
  }
`;

export const MessageError = styled.p`
  padding-left: 0.75rem;

  font-size: 0.75rem;
  line-height: 130%;

  color: red;
`;
