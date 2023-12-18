import { styled } from "styled-components";

const StyledEditItem = styled.form`
  .row {
    display: flex;
    align-items: center;
    gap: 1.6rem;

    & .name {
      width: 26rem;
      margin-top: -1rem;
    }

    & .qty {
      width: 5rem;
      margin-top: -1rem;
    }

    & .price {
      width: 10rem;
      margin-top: -1rem;
    }

    & .total {
      color: var(--color-text-tertiary);
      width: 8.2rem;
    }

    & .delete {
      cursor: pointer;
      &:hover svg path {
        fill: var(--color-red-primary);
        transition: all 300ms;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .row {
      flex-wrap: wrap;

      & .name {
        flex: 1;
        width: 100%;
      }
    }
  }
`;

export default StyledEditItem;
