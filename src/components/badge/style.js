import { styled } from "styled-components";

const StyledBadge = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
  justify-content: center;
  width: 12rem;
  border-radius: 0.6rem;
  padding: 1.2rem 2rem;

  .status {
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: -0.25px;
  }

  .round {
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 100%;
  }

  &.Paid {
    background-color: rgba(51, 214, 159, 0.1);

    & .status {
      color: var(--color-green);
    }

    & .round {
      background-color: var(--color-green);
    }
  }

  &.Pending {
    background-color: rgba(255, 143, 0, 0.1);

    & .status {
      color: var(--color-orange);
    }

    & .round {
      background-color: var(--color-orange);
    }
  }

  &.Draft {
    background-color: rgba(136, 142, 176, 0.1);

    & .status {
      color: var(--color-text);
    }

    & .round {
      background-color: var(--color-text);
    }
  }
`;

export default StyledBadge;
