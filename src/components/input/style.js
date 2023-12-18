import styled from "styled-components";

const StyledInput = styled.form`
  display: flex;
  flex-direction: column;
  width: 24rem;
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
`;

export default StyledInput;
