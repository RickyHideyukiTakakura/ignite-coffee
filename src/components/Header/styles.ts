import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem 0;
`;

export const Navigation = styled.nav`
  position: relative;

  display: flex;
  align-items: center;
  gap: 0.75rem;

  button {
    display: flex;

    padding: 0.5rem;
    border-radius: 6px;
    border: none;

    background: ${(props) => props.theme["yellow-light"]};

    svg {
      color: ${(props) => props.theme["yellow-dark"]};
    }

    strong {
      content: "2";

      position: absolute;

      display: flex;
      align-items: center;
      justify-content: center;

      top: -8px;
      right: -8px;
      width: 1.25rem;
      height: 1.25rem;

      border-radius: 50%;

      background: ${(props) => props.theme["yellow-dark"]};
      color: ${(props) => props.theme["white"]};

      font-size: 0.75rem;
      line-height: 130%;
    }
  }
`;

export const Location = styled.div`
  display: flex;
  align-items: center;
  gap: 0.125rem;

  padding: 0.5rem;
  border-radius: 6px;

  background: ${(props) => props.theme["purple-light"]};

  svg {
    color: ${(props) => props.theme["purple"]};
  }

  span {
    color: ${(props) => props.theme["purple-dark"]};

    font-size: 0.875rem;
    line-height: 130%;
  }
`;
