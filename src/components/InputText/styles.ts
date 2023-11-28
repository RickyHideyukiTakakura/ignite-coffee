import styled from "styled-components";

export const InputTextContainer = styled.input`
  width: 100%;
  position: relative;

  padding: 0.75rem;

  background: ${(props) => props.theme["base-input"]};
  color: ${(props) => props.theme["base-text"]};

  border: 1px solid ${(props) => props.theme["base-button"]};
  border-radius: 4px;

  font-size: 0.875rem;
  line-height: 130%;

  &::placeholder {
    color: ${(props) => props.theme["base-label"]};
  }
`;
