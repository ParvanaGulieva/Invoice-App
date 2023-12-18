import { styled } from "styled-components";

const StyledNewInvoice = styled.form`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);

  .modal {
    width: 72em;
    height: 100%;
    background-color: var(--color-modal);
    border-top-right-radius: 2rem;
    border-bottom-right-radius: 2rem;
    padding: 5.6rem;
    padding-left: 15.9rem;
    overflow-y: scroll;

    opacity: ${(props) => (props.show ? 0 : 1)};
    transform: translateX(${(props) => (props.show ? "-100%" : "0")});
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  }

  .heading-M {
    color: var(--color-text);
  }

  .heading-S-variant {
    color: var(--color-purple-primary);
  }

  .bill,
  .billTo,
  .itemList {
    margin-top: 4.8rem;
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    & form {
      width: 100%;
    }

    & .address {
      display: flex;
      gap: 2.4rem;
      width: 100%;

      & input {
        width: 100%;
      }
    }
  }

  .date {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    margin-top: 3.2rem;

    & .terms {
      display: flex;
      gap: 2.4rem;
    }
  }

  .list {
    & .table {
      display: flex;
      flex-direction: column;
      gap: 1.6rem;
      & .header {
        display: flex;
        gap: 1.6rem;

        & p {
          color: var(--color-text-secondary);
        }

        & .name {
          width: 21.4rem;
        }

        & .qty {
          width: 5rem;
        }

        & .price {
          width: 10rem;
        }

        & .total {
          width: 9.6rem;
        }
      }
    }
  }

  .btn-container {
    display: flex;
    justify-content: space-between;
    margin-top: 4.8rem;

    & .right {
      display: flex;
      gap: 0.8rem;
    }
  }

  .goBack {
    display: none;
  }

  @media screen and (max-width: 1024px) {
    .modal {
      padding-top: 12rem;
      height: 100%;
      padding-left: 5.6rem;
    }
  }

  @media screen and (max-width: 768px) {
    .modal {
      width: 100vw;
      padding-left: 2.4rem;
      padding-right: 2.4rem;
      border-radius: 0;
    }

    .goBack {
      display: flex;
      align-items: center;
      margin-bottom: 4rem;
      gap: 2.4rem;
      cursor: pointer;
      & p {
        color: var(--color-text);
        &:hover {
          color: #7e88c3;
          transition: all 300ms;
        }
      }
    }
  }
`;

export default StyledNewInvoice;
