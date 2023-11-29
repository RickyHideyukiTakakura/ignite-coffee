import styled from "styled-components";

export const SuccessContainer = styled.main`
  display: flex;
  align-items: flex-end;
  gap: 6.25rem;

  margin-top: 5rem;

  img {
    width: 30.75rem;
    height: 18.25rem;
  }
`;

export const Order = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

export const OrderHeading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  h2 {
    font-family: "Baloo 2";
    font-size: 2rem;
    font-weight: 800;
    line-height: 130%;
    color: ${(props) => props.theme["yellow-dark"]};
  }

  p {
    font-size: 1.25rem;
    line-height: 130%;
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const InfoBorderContainer = styled.div`
  border-radius: 6px 36px;
  border: 1px solid;
  border-color: transparent;
  background-origin: border-box;
  background-image: linear-gradient(
    to bottom right,
    rgba(219, 172, 44, 1) 0%,
    rgba(128, 71, 248, 1) 100%
  );
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding: 2.5rem;
  border-radius: 6px 36px;
  background: ${(props) => props.theme["background"]};
`;

const BaseInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  span {
    line-height: 130%;
    color: ${(props) => props.theme["base-text"]};
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 2rem;
    height: 2rem;

    border-radius: 50%;

    svg {
      width: 1rem;
      height: 1rem;
      color: ${(props) => props.theme["white"]};
    }
  }
`;

export const InfoLocation = styled(BaseInfo)`
  strong {
    display: inline;
  }

  div {
    background: ${(props) => props.theme["purple"]};
  }
`;

export const InfoTimer = styled(BaseInfo)`
  strong {
    display: block;
  }

  div {
    background: ${(props) => props.theme["yellow"]};
  }
`;

export const InfoPayment = styled(BaseInfo)`
  strong {
    display: block;
  }

  div {
    background: ${(props) => props.theme["yellow-dark"]};
  }
`;
