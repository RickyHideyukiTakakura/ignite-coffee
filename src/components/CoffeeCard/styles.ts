import styled from "styled-components";

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0 1.25rem 1.25rem;

  background: ${(props) => props.theme["base-card"]};

  border-radius: 6px 36px 6px 36px;

  width: 16rem;

  img {
    width: 7.5rem;
    height: 7.5rem;

    margin-top: -1.25rem;
    margin-bottom: 0.75rem;
  }

  img + div {
    display: flex;
    align-items: center;
    gap: 0.25rem;

    & > strong {
      padding: 0.25rem 0.5rem;

      background: ${(props) => props.theme["yellow-light"]};
      color: ${(props) => props.theme["yellow-dark"]};

      text-transform: uppercase;
      font-size: 0.625rem;
      line-height: 130%;

      border-radius: 100px;
    }
  }

  h4 {
    color: ${(props) => props.theme["base-subtitle"]};

    font-size: 1.25rem;
    line-height: 130%;

    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: ${(props) => props.theme["base-label"]};

    font-size: 0.875rem;
    line-height: 130%;

    text-align: center;

    margin-bottom: 2rem;
  }
`;

export const BuyContainer = styled.div`
  display: flex;
  align-items: center;

  & > span {
    font-size: 0.875rem;
    line-height: 130%;

    color: ${(props) => props.theme["base-text"]};

    margin-right: 1.5rem;

    strong {
      font-size: 1.5rem;
    }
  }

  div + button {
    display: flex;

    padding: 0.5rem;
    background: ${(props) => props.theme["purple-dark"]};

    border: none;
    border-radius: 6px;

    margin-left: 0.5rem;

    transition: all 0.5s;

    svg {
      color: ${(props) => props.theme["white"]};
    }

    &:hover {
      background: ${(props) => props.theme["purple"]};
    }
  }
`;
