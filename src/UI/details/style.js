import { styled } from "styled-components";

const StyledDetails = styled.div`
  margin-left: 10.3rem;
  .main {
    background-color: var(--color-bg-tertiary);
    box-shadow: var(--shadow-row);
    border-radius: 0.8rem;
    padding: 4.8rem;
    width: 73rem;
    margin: 2.4rem auto;
    display: flex;
    flex-direction: column;
  }

  .top {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }

  .body-M {
    color: var(--color-text-secondary);
  }

  .id {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    & span {
      color: var(--color-text-secondary);
    }
  }

  .address {
    display: flex;
    flex-direction: column;
    text-align: right;
  }

  .center {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-top: 2.4rem;

    .heading-S-variant {
      margin-top: 1.2rem;
    }
  }

  .center-left {
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
  }

  .billTo .break {
    margin-top: 1.2rem;
  }

  .table {
    border-top-right-radius: 0.8rem;
    border-top-left-radius: 0.8rem;
    background-color: var(--color-bg-secondary);
    padding: 3.2rem;
    margin-top: 4.8rem;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;

    & .header,
    & .row {
      display: flex;
      justify-content: space-between;

      & > p {
        width: 100%;
      }

      & .quantity,
      & .price {
        text-align: center;
      }

      & .total {
        text-align: right;
      }
    }
  }
  & .footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--color-footer);
    padding: 3.2rem;
    border-bottom-left-radius: 0.8rem;
    border-bottom-right-radius: 0.8rem;
    & > p {
      color: var(--color-white);
    }
  }

  @media screen and (max-width: 1024px) {
    margin-left: 0;
  }

  @media screen and (max-width: 768px) {
    margin-left: 0;

    .main {
      margin-left: 2.4rem;
      margin-right: 2.4rem;
      padding: 2.4rem;
      width: auto;
      margin-bottom: 12rem;
    }

    .top {
      flex-direction: column;
      gap: 3.2rem;

      & .address p {
        text-align: left;
      }
    }

    .center {
      flex-wrap: wrap;
      gap: 3.2rem;
    }

    .table {
      padding: 2.4rem;

      & .header {
        display: none;
      }

      & .row {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);

        & .price {
          text-align: left;
          margin-top: 0.4rem;
        }

        & .quantity {
          text-align: right;
          margin-bottom: 0.4rem;
        }
      }
    }
  }
`;

export default StyledDetails;
