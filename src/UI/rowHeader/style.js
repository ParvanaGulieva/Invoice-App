import { styled } from "styled-components";

const StyledRowHeader = styled.div`
  margin-left: 10.3rem;
  .goBack {
    width: 73rem;
    margin: 6.4rem auto 4.8rem;
    display: flex;
    align-items: center;
    gap: 2.4rem;
    cursor: pointer;

    &:hover p {
      color: #7e88c3;
      transition: all 300ms;
    }
  }
  & .header {
    width: 73rem;
    margin: 0 auto;
    padding: 2.4rem 3.2rem;
    background-color: var(--color-bg-tertiary);
    box-shadow: var(--shadow-row);
    border-radius: 0.8rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .btn-container {
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }

  .body-M-variant {
    color: #858bb2;
  }

  .status {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  @media screen and (max-width: 1024px) {
    margin-left: 0;
    margin-top: 8rem;
  }
  @media screen and (max-width: 768px) {
    margin-left: 2.4rem;
    margin-right: 2.4rem;

    & .goBack {
      margin-bottom: 3.2rem;
      width: 100%;
    }

    & .header {
      width: 100%;
      padding: 2.4rem;

      & .status {
        justify-content: space-between;
      }

      & .btn-container {
        position: fixed;
        bottom: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.8rem;
        width: 100%;
        padding: 2.4rem;
        background-color: var(--color-bg-tertiary);
        filter: var(--footer-shadow);
      }
    }
  }
`;

export default StyledRowHeader;
