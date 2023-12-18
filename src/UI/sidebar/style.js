import { styled } from "styled-components";

const StyledSidebar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 10.3rem;
  background-color: var(--color-sidebar);
  height: 100vh;
  border-top-right-radius: 2rem;
  border-bottom-right-radius: 2rem;
  position: fixed;
  z-index: 9999;

  /* grid-column: 1/2;
  grid-row: 1/-1; */

  .sidebarBottom {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .theme {
    width: 100%;
    padding: 3.2rem 4rem;
    border-bottom: 1px solid #494e6e;
    cursor: pointer;
  }

  .profile {
    margin-top: 2.4rem;
    margin-bottom: 2.4rem;
  }

  @media screen and (max-width: 1024px) {
    flex-direction: row;
    width: 100%;
    height: 8rem;
    border-radius: 0;

    & .logo {
      height: 8rem;
    }

    & .sidebarBottom {
      flex-direction: row;
      width: min-content;

      & .theme {
        width: min-content;
        border: none;
        border-right: 1px solid #494e6e;
        padding: 2.88rem 2.4rem;
      }

      & .profile {
        margin: 0;
        padding: 2.4rem;
        height: 8rem;
      }
    }
  }

  @media screen and (max-width: 768px) {
    height: 7.2rem;

    & .logo {
      height: 7.2rem;
    }

    & .sidebarBottom {
      & .theme {
        padding: 2.48rem 2.4rem;
      }

      & .profile {
        margin: 0;
        padding: 2.4rem;
        height: 7.2rem;
      }
    }
  }
`;

export default StyledSidebar;
