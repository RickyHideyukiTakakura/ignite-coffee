import styled from "styled-components";

export const InputNumberContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  border-radius: 6px;
  background: ${(props) => props.theme["base-button"]};
  padding: 0.5rem;

  span {
    width: 1.25rem;
    text-align: center;
    font-size: 1rem;
    line-height: 130%;
    color: ${(props) => props.theme["base-title"]};
  }
`;

export const Button = styled.button`
  display: flex;
  border: none;
  background: transparent;

  color: ${(props) => props.theme["purple"]};

  &:hover {
    color: ${(props) => props.theme["purple-dark"]};
  }

  svg {
    width: 0.875rem;
    height: 0.875rem;
  }
`;
