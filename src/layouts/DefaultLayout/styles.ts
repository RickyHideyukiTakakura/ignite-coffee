import styled from "styled-components";
import backgroundImage from "../../assets/bg-image.png";

export const LayoutContainer = styled.div`
  padding: 0 10rem;

  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;

  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-position: 0 6.5rem;
  background-size: auto 34rem;
`;
