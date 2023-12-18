import { styled } from "styled-components";

const StyledEmptyPage = styled.div`
  align-self: center;
  justify-self: center;
  margin-left: 10.3rem;

  .title {
    margin-top: 6.4rem;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    gap: 2.4rem;
  }

  .body-M-variant {
    color: var(--color-text-tertiary);
    width: 20rem;

    &  .link {
      border:none;
    cursor:pointer;
      font-weight: bold;
      color: var(--color-purple-primary);
      transition: all 300ms;


      &:hover {
        color: var(--color-purple-secondary);
      }
    }
  }

  @media screen and (max-width: 1024px) {
    margin-bottom: 4rem;
    height: 100vh;
    margin-left: 0;
  }
`;

export default StyledEmptyPage;
