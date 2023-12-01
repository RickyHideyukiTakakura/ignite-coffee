import styled from "styled-components";

export const AddressForm = styled.div`
  margin-top: 2rem;

  display: grid;
  grid-template-columns: 200px auto 60px;

  gap: 1rem 0.75rem;

  .zip-code {
    grid-column: 1;
    grid-row: 1;
  }

  .street {
    grid-column: span 3;
    grid-row: 2;
  }

  .number {
    grid-column: 1;
    grid-row: 3;
  }

  .complement {
    grid-column: 2 / span 2;
    grid-row: 3;
  }

  .neighborhood {
    grid-column: 1;
    grid-row: 4;
  }

  .city {
    grid-column: 2;
    grid-row: 4;
  }

  .state {
    grid-column: 3;
    grid-row: 4;
  }
`;
