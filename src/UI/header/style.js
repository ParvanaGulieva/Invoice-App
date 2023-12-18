import { styled } from "styled-components";

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 8rem;
  margin-bottom: 6.4rem;
  margin-left: 10.3rem;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 73rem;
  }

  .title {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }

  .body-M {
    color: var(--color-text-tertiary);
  }

  .btn-container {
    display: flex;
    align-items: center;
    gap: 4rem;
  }

  .filter {
    position: relative;

    & .filter-dropdown {
      display: flex;
      align-items: center;
      gap: 1.6rem;
      cursor: pointer;
    }

    & .dropdown {
      position: absolute;
      padding: 2.4rem;
      border-radius: 0.8rem;
      box-shadow: var(--dropdown-shadow);
      width: 19.2rem;
      background-color: var(--color-bg-tertiary);
      top: 4rem;
      left: -4rem;
      display: flex;
      flex-direction: column;
      gap: 1.6rem;

      & .item {
        display: flex;
        align-items: center;
        gap: 0.4rem;

        &,
        & input {
          cursor: pointer;
        }
      }
    }
  }

  .checkboxContainer {
    display: block;
    position: relative;
    padding-left: 3rem;
    margin-bottom: 2rem;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    & input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
    }
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 2rem;
    width: 2rem;
    border-radius: 0.4rem;
    background-color: var(--color-grey-primary);
    border: 1px solid transparent;
    transition: all 300ms;

    &:hover {
      border: 1px solid var(--color-purple-primary);
    }
  }

  .checkboxContainer input:checked ~ .checkmark {
    background-color: var(--color-purple-primary);
    border-color: transparent;
  }

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  .checkboxContainer input:checked ~ .checkmark:after {
    display: block;
  }

  .checkboxContainer .checkmark:after {
    left: 0.7rem;
    top: 0.3rem;
    width: 0.5rem;
    height: 1rem;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  @media screen and (max-width: 1024px) {
    margin-top: 16rem;
    margin-left: 0;
  }

  @media screen and (max-width: 768px) {
    margin-left: 0;
    margin-top: 12rem;
    .header {
      margin-right: 2.4rem;
      margin-left: 2.4rem;

      & .btn-container {
        gap: 1.6rem;
      }
    }
  }

  @media screen and (max-width: 524px) {
    .header {
      flex-direction: column;
      align-items: flex-start;
      gap: 2.4rem;

      & .btn-container {
        justify-content: space-between;
        width: 100%;
      }
    }
  }
`;

export default StyledHeader;
