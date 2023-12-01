import styled from "styled-components";

export const RadioContainer = styled.label`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  padding: 1rem;
  border-radius: 6px;
  border: none;

  background: ${(props) => props.theme["base-button"]};
  color: ${(props) => props.theme["base-text"]};

  text-transform: uppercase;
  font-size: 0.75rem;
  line-height: 160%;

  cursor: pointer;

  transition: background-color 0.5s;

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 1px ${(props) => props.theme["purple"]};
  }

  &:hover {
    background: ${(props) => props.theme["base-hover"]};
  }

  &[data-state="true"] {
    background: ${(props) => props.theme["purple-light"]};
    outline: 0;
    box-shadow: 0 0 0 1px ${(props) => props.theme["purple"]};
  }

  input {
    display: none;
  }

  svg {
    color: ${(props) => props.theme["purple"]};

    width: 1rem;
    height: 1rem;
  }
`;
