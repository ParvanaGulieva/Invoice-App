import React from "react";
import StyledButton from "./style";

const Button = ({ type, text, onClick, disabled }) => {
  return (
    <StyledButton className={type} onClick={onClick} disabled={disabled}>
      {type === "primaryAdd" && (
        <div className="add">
          <p>+</p>
        </div>
      )}
      {text}
    </StyledButton>
  );
};

export default Button;
