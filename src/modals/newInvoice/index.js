import React, { useState, useEffect } from "react";
import { useRef } from "react";
import StyledNewInvoice from "./style";
import Input from "../../components/input";
import Dropdown from "../../components/dropdown";
import Button from "../../components/button";
import NewItem from "./newItem";

const NewInvoice = ({ show, handleCloseModal, formik, saveData }) => {
  const [itemError, setItemError] = useState("");
  const modalRef = useRef(null);

  useEffect(() => {
    if (show) {
      formik.resetForm();
      formik.setFieldValue("items", []);
      setItemError("");
    }
  }, [show]);

  const handleOverlayClick = (e) => {
    e.preventDefault();
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      handleCloseModal();
    }
  };

  const handleAddItem = () => {
    const newItem = {
      id: Date.now().toString(),
      itemName: "",
      quantity: "",
      price: "",
    };
    formik.setFieldValue("items", [...formik.values.items, newItem]);
  };

  const removeItem = (itemId) => {
    const updatedItems = formik.values.items.filter(
      (item) => item.id !== itemId
    );
    formik.setFieldValue("items", updatedItems);
  };

  const handleSaveDraft = () => {
    formik.handleSubmit();
    formik.values.id = Date.now().toString();
    formik.values.status = "Draft";
    saveData();
    formik.resetForm();
    handleCloseModal();
  };

  const handleSaveSend = () => {
    formik.handleSubmit();
    if (formik.isValid) {
      setItemError("");
      formik.values.status = "Pending";
      formik.values.id = Date.now().toString();
      saveData();
      formik.resetForm();
      handleCloseModal();
    } else if (formik.values.items.length === 0 || formik.errors.items) {
      setItemError("Item must be added");
    } else {
      setItemError("All fields should be filled");
    }
  };

  return (
    <StyledNewInvoice onClick={handleOverlayClick} onSubmit={formik.onSubmit}>
      <div className="modal" ref={modalRef}>
        <p className="heading-M">New Invoice</p>
        <div className="form bill ">
          <p className="heading-S-variant">Bill From</p>
          <Input
            label="Street Address"
            type="text"
            name="streetAddress"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.streetAddress}
            className={
              formik.errors.streetAddress && formik.touched.streetAddress
                ? "error"
                : ""
            }
            message={formik.errors.streetAddress}
          />
          <div className="address">
            <Input
              label="City"
              type="text"
              name="city"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.city}
              className={
                formik.errors.city && formik.touched.city ? "error" : ""
              }
              message={formik.errors.city}
            />
            <Input
              label="Post Code"
              type="text"
              name="postCode"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.postCode}
              className={
                formik.errors.postCode && formik.touched.postCode ? "error" : ""
              }
              message={formik.errors.postCode}
            />
            <Input
              label="Country"
              type="text"
              name="country"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.country}
              className={
                formik.errors.country && formik.touched.country ? "error" : ""
              }
              message={formik.errors.country}
            />
          </div>
        </div>
        <div className="form billTo ">
          <p className="heading-S-variant">Bill To</p>
          <Input
            label="Client's Name"
            type="text"
            name="clientName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.clientName}
            className={
              formik.errors.clientName && formik.touched.clientName
                ? "error"
                : ""
            }
            message={formik.errors.clientName}
          />
          <Input
            label="Client's Email"
            type="email"
            name="clientEmail"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.clientEmail}
            className={
              formik.errors.clientEmail && formik.touched.clientEmail
                ? "error"
                : ""
            }
            message={formik.errors.clientEmail}
          />
          <Input
            label="Street Address"
            type="text"
            name="clientAddress"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.clientAddress}
            className={
              formik.errors.clientAddress && formik.touched.clientAddress
                ? "error"
                : ""
            }
            message={formik.errors.clientAddress}
          />
          <div className="address">
            <Input
              label="City"
              type="text"
              name="clientCity"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.clientCity}
              className={
                formik.errors.clientCity && formik.touched.clientCity
                  ? "error"
                  : ""
              }
              message={formik.errors.clientCity}
            />
            <Input
              label="Post Code"
              type="text"
              name="clientPostCode"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.clientPostCode}
              className={
                formik.errors.clientPostCode && formik.touched.clientPostCode
                  ? "error"
                  : ""
              }
              message={formik.errors.clientPostCode}
            />
            <Input
              label="Country"
              type="text"
              name="clientCountry"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.clientCountry}
              className={
                formik.errors.clientCountry && formik.touched.clientCountry
                  ? "error"
                  : ""
              }
              message={formik.errors.clientCountry}
            />
          </div>
          <div className="date">
            <div className="terms">
              <Input
                type="date"
                label="Invoice Date"
                name="invoiceDate"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.invoiceDate}
                className={
                  formik.errors.invoiceDate && formik.touched.invoiceDate
                    ? "error"
                    : ""
                }
                message={formik.errors.invoiceDate}
              />
              <Dropdown
                value={formik.values.selectedOption}
                className={formik.errors.selectedOption ? "error" : ""}
                message={formik.errors.selectedOption}
                formik={formik}
              />
            </div>
            <Input
              label="Project Description"
              type="text"
              name="description"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.description}
              className={
                formik.errors.description && formik.touched.description
                  ? "error"
                  : ""
              }
              message={formik.errors.description}
            />
          </div>
        </div>
        <div className="form list ">
          <p className="heading-S-variant itemList">Item List</p>
          <div className="list table">
            <div className="header">
              <p className="body-M-variant name ">Item Name</p>
              <p className="body-M-variant qty">Qty.</p>
              <p className="body-M-variant price">Price</p>
              <p className="body-M-variant total">Total</p>
            </div>
            {formik.values.items.map((item, index) => {
              return (
                <NewItem
                  key={index}
                  item={{ ...item, index }}
                  onRemoveItem={removeItem}
                  formik={formik}
                />
              );
            })}
            <Button
              type="secondary"
              text="+ Add New Item"
              onClick={handleAddItem}
            />
            {itemError && <p className="message">{itemError}</p>}
          </div>
        </div>
        <div className="btn-container">
          <div className="left">
            <Button
              type="secondary"
              text="Discard"
              onClick={handleCloseModal}
            />
          </div>
          <div className="right">
            <Button
              type="tertiary"
              text="Save as Draft"
              onClick={handleSaveDraft}
            />
            <Button
              type="primary submit"
              text="Save & Send"
              onClick={handleSaveSend}
            />
          </div>
        </div>
      </div>
    </StyledNewInvoice>
  );
};

export default NewInvoice;
