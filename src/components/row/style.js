import { styled } from "styled-components";

const StyledRow = styled.div`
  background-color: var(--color-bg-tertiary);
  padding: 3rem 3.2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  border-radius: 0.8rem;
  box-shadow: var(--row-shadow);
  transition: all 300ms;
  border: 1px solid var(--color-bg-tertiary);
  margin-left: 5.2rem;

  &:hover {
    border: 1px solid var(--color-purple-primary);
    cursor: pointer;
  }

  .id {
    & span {
      color: var(--color-text-secondary);
    }
  }

  .id p,
  .date,
  .name,
  .price {
    width: calc((730px - 128px) / 4);
  }
  .body-M-variant {
    color: #858bb2;
  }

  .right {
    margin-left: 2rem;
  }

  @media screen and (max-width: 1024px) {
    margin-left: 0;
  }

  @media screen and (max-width: 768px) {
    padding: 2.4rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    width: 100%;

    .id p,
    .date,
    .name,
    .price {
      width: auto;
    }

    .date {
      grid-column: 2/3;
      grid-row: 1/2;
      margin-left: auto;
      text-align: right;
    }

    .price {
      grid-column: 1/2;
      grid-row: 3/4;
    }

    .right {
      display: none;
    }

    .badge {
      grid-column: 2/3;
      grid-row: 3/4;
      margin-left: auto;
    }
  }
`;

export default StyledRow;
