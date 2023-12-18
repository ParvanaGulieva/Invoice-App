import React, { useState, useEffect } from "react";
import StyledDropdown from "./style";
import { userSchema } from "../../validation/formValidation";
import down from "../../assets/down2.svg";
import up from "../../assets/up.svg";
import { useFormik } from "formik";

const Dropdown = ({ value, className, message, formik }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option) => {
    formik.setFieldValue("selectedOption", option);
    setIsOpen(false);
  };

  return (
    <StyledDropdown className={className}>
      <div className="labelError">
        <label>Payment Terms</label>
        {className && <p className="message">{message}</p>}
      </div>
      <div
        className={
          isOpen ? "dropdown clicked" : message ? "dropdown error" : "dropdown"
        }
        onClick={toggleDropdown}
      >
        <p>{value}</p>
        <img src={isOpen ? up : down} alt="dropdownIcon" />
      </div>
      {isOpen && (
        <ul className="dropdown-options">
          <li onClick={() => selectOption("Net 1 Day")}>Net 1 Day</li>
          <li onClick={() => selectOption("Net 7 Days")}>Net 7 Days</li>
          <li onClick={() => selectOption("Net 14 Days")}>Net 14 Days</li>
          <li onClick={() => selectOption("Net 30 Days")}>Net 30 Days</li>
        </ul>
      )}
    </StyledDropdown>
  );
};

export default Dropdown;
