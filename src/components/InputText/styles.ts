import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const InputTextContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  background: ${(props) => props.theme["base-input"]};

  border: 1px solid ${(props) => props.theme["base-button"]};
  border-radius: 4px;

  & > input {
    width: 100%;
    padding: 0.75rem;

    background: transparent;
    border: none;
    border-radius: 4px;

    font-size: 0.875rem;
    line-height: 130%;

    color: ${(props) => props.theme["base-text"]};

    &::placeholder {
      color: ${(props) => props.theme["base-label"]};
    }
  }

  span {
    padding: 0 0.75rem;

    font-size: 0.75rem;
    font-style: italic;
    line-height: 130%;

    color: ${(props) => props.theme["base-label"]};
  }
`;

export const MessageError = styled.p`
  padding-left: 0.75rem;

  font-size: 0.75rem;
  line-height: 130%;

  color: red;
`;
