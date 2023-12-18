import styled from "styled-components";

const StyledButton = styled.button`
  padding: 1.6rem 2.4rem;
  border-radius: 2.4rem;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.25px;
  transition: all 300ms;

  &:disabled {
    opacity: 0.5;
  }

  &.delete {
    background-color: var(--color-red-primary);
    color: var(--color-white);

    &:hover {
      background-color: var(--color-red-secondary);
    }
  }

  &.primary {
    background-color: var(--color-purple-primary);
    color: var(--color-white);

    &:not(:disabled):hover {
      background-color: var(--color-purple-secondary);
    }
  }

  &.secondary {
    background-color: var(--color-bg-secondary);
    color: var(--color-text-secondary);

    &:hover {
      background-color: var(--color-grey-primary);
    }
  }

  &.tertiary {
    color: var(--color-text-tertiary);
    background-color: var(--color-sidebar);

    &:hover {
      color: var(--color-white);
    }
  }

  &.addItem {
    padding: 1.6rem 11.2rem !important;
    background-color: var(--color-bg-secondary);
    color: var(--color-text-secondary);

    &:hover {
      background-color: #dfe3fa;
    }
  }

  &.primaryAdd {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1.6rem;
    color: var(--color-white);
    background-color: var(--color-purple-primary);
    padding: 0.8rem 2.4rem;
    padding-left: 0.8rem;

    &:hover {
      background-color: var(--color-purple-secondary);
    }

    & .add {
      height: 3.2rem;
      width: 3.2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--color-white);
      border-radius: 100%;

      & p {
        color: var(--color-purple-primary);
        font-size: 2rem;
        vertical-align: middle;
        line-height: 1rem;
      }
    }
  }
`;

export default StyledButton;
