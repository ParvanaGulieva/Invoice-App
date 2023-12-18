import { styled } from "styled-components";

const StyledConfirmDelete = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);

  display: flex;
  justify-content: center;
  align-items: center;

  & .modal {
    display: flex;
    flex-direction: column;
    background-color: var(--color-bg-tertiary);
    padding: 4.8rem;
    border-radius: 0.8rem;
    width: 44rem;

    & .description {
      font-size: 1.3rem;
      font-weight: 500;
      line-height: 2.2rem;
      letter-spacing: -0.1px;
      color: var(--color-text-tertiary);
      margin-top: 1.2rem;

      & b{
        color:var(--color-text)
      }
    }

    & .btn-container {
      display: flex;
      gap: 0.8rem;
      margin-left: auto;
      margin-top: 1.2rem;
    }
  }
  @media screen and (max-width: 564px) {
    .modal {
      margin-left: 2.4rem;
      margin-right: 2.4rem;
      padding: 3.2rem;
    }
  }
`;

export default StyledConfirmDelete;
