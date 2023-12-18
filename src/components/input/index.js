import React from "react";
import StyledInput from "./style";

const Input = ({
  label,
  type,
  message,
  className,
  onChange,
  onBlur,
  value,
  name,
}) => {
  return (
    <StyledInput className={className}>
      <div className="labelError">
        <label htmlFor={type}>{label}</label>
        {className && <p className="message">{message}</p>}
      </div>
      <input
        type={type}
        id={label}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        name={name}
      />
    </StyledInput>
  );
};

export default Input;
