import { styled } from "styled-components";

const StyledTable = styled.div`
  grid-column: 2/3;
  grid-row: 2/3;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
  width: 73rem;
  margin: 0 auto;
  margin-bottom: 4rem;

  a {
    text-decoration: none;
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    margin-left: 2.4rem;
    margin-right: 2.4rem;
    margin-top: -2rem;
    width: auto;
  }
`;

export default StyledTable;
