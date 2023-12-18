import { styled } from "styled-components";

const StyledDetailedRow = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-bg);
  height: 100vh;

  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;

export default StyledDetailedRow;
