import { styled } from "styled-components";

const StyledDropdown = styled.form`
  width: 24rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .labelError {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    & .message {
      color: var(--color-red-primary);
    }
  }

  & .dropdown {
    padding: 1.6rem;
    border-radius: 0.4rem;
    border: 1px solid var(--color-grey-primary);
    background: var(--color-bg-tertiary);
    color: var(--color-text);
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.5rem;
    letter-spacing: -0.25px;
    outline: none;
    height: 4.8rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    position: relative;

    &.error {
      border-color: var(--color-red-primary) !important;
    }
  }
  & .clicked {
    border: 1px solid var(--color-purple-primary);
  }

  & .dropdown-options {
    border-radius: 0.8rem;
    background-color: var(--color-bg-tertiary);
    box-shadow: var(--dropdown-shadow);
    width: 24rem;

    position: absolute;
    margin-top: 8rem;

    & li {
      list-style: none;
      padding: 1.6rem 2.4rem;
      color: var(--color-text);
      font-size: 1.5rem;
      font-style: normal;
      font-weight: 700;
      line-height: 1.5rem;
      letter-spacing: -0.25px;
      cursor: pointer;
      transition: all 300ms;

      &:not(:last-of-type) {
        border-bottom: 1px solid var(--color-grey-primary);
      }

      &:hover {
        color: var(--color-purple-primary);
      }
    }
  }
`;

export default StyledDropdown;
