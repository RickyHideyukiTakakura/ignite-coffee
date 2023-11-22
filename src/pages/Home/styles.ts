import styled from "styled-components";

export const HomeContainer = styled.main``;

export const IntroContainer = styled.div`
  margin: 5.75rem 0;

  display: flex;
  gap: 3.5rem;

  img {
    width: 29.75rem;
    height: 22.5rem;
  }
`;

export const IntroContent = styled.div`
  h1 {
    font-family: "Baloo 2", sans-serif;
    font-size: 3rem;
    font-weight: 800;
    line-height: 130%;

    color: ${(props) => props.theme["base-title"]};
  }

  p {
    font-size: 1.25rem;
    line-height: 130%;

    color: ${(props) => props.theme["base-subtitle"]};

    margin-top: 1rem;
  }
`;

export const FeaturesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;

  margin-top: 4.125rem;
`;

const BaseFeature = styled.div`
  display: flex;
  align-items: center;
  gap: 0.375rem;

  width: max-content;

  div {
    display: flex;
    padding: 0.5rem;
    border-radius: 50%;
  }

  svg {
    width: 1rem;
    height: 1rem;

    color: ${(props) => props.theme["white"]};
  }

  span {
    color: ${(props) => props.theme["base-text"]};

    line-height: 130%;
  }
`;

export const ShoppingFeature = styled(BaseFeature)`
  div {
    background: ${(props) => props.theme["yellow-dark"]};
  }
`;

export const PackageFeature = styled(BaseFeature)`
  div {
    background: ${(props) => props.theme["base-text"]};
  }
`;

export const TimerFeature = styled(BaseFeature)`
  div {
    background: ${(props) => props.theme["yellow"]};
  }
`;

export const CoffeeFeature = styled(BaseFeature)`
  div {
    background: ${(props) => props.theme["purple"]};
  }
`;

export const CoffeeList = styled.div`
  margin-top: 2rem;

  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;
