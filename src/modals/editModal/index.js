import React, { useState } from "react";
import { useRef } from "react";
import { useFormik } from "formik";
import Input from "../../components/input";
import Dropdown from "../../components/dropdown";
import Button from "../../components/button";
import EditItem from "../../modals/editModal/editItem";
import NewItem from "../../modals/editModal/editItem";
import StyledEditModal from "./style";
import { userSchema } from "../../validation/formValidation";

const EditModal = ({ handleCloseEdit, selectedItem }) => {
  const modalRef = useRef(null);
  const [itemError, setItemError] = useState("");

  const formik = useFormik({
    initialValues: {
      id: selectedItem.id,
      status: selectedItem.status,
      streetAddress: selectedItem.streetAddress,
      city: selectedItem.city,
      postCode: selectedItem.postCode,
      country: selectedItem.country,
      clientName: selectedItem.clientName,
      clientEmail: selectedItem.clientEmail,
      clientAddress: selectedItem.clientAddress,
      clientCity: selectedItem.clientCity,
      clientPostCode: selectedItem.clientPostCode,
      clientCountry: selectedItem.clientCountry,
      invoiceDate: selectedItem.invoiceDate,
      description: selectedItem.description,
      items: selectedItem.items.map((item) => ({
        itemName: item.itemName,
        quantity: item.quantity,
        price: item.price,
        id: item.id,
      })),
      selectedOption: selectedItem.selectedOption,
      paymentDate: selectedItem.paymentDate,
    },
    validationSchema: userSchema,
    // validateOnChange: false,
  });

  const handleOverlayClick = (e) => {
    e.preventDefault();
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      handleCloseEdit();
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

  const saveChanges = () => {
    const storedData = JSON.parse(localStorage.getItem("form_data")) || [];
    const updatedData = storedData.map((item) => {
      if (item.id === formik.values.id) {
        return { ...item, ...formik.values };
      } else {
        return item;
      }
    });

    localStorage.setItem("form_data", JSON.stringify(updatedData));
  };

  const handleSaveChanges = () => {
    formik.handleSubmit();
    if (formik.isValid) {
      setItemError("");
      formik.values.status = "Pending";
      saveChanges();
      handleCloseEdit();
    } else if (formik.values.items.length === 0 || formik.errors.items) {
      setItemError("Item must be added");
    } else {
      setItemError("All fields should be filled");
    }
  };

  return (
    <StyledEditModal onClick={handleOverlayClick}>
      <div className="modal" ref={modalRef}>
        <p className="heading-M">
          Edit <span className="span"> #</span>RT
          {selectedItem.id.toString().slice(-6)}
        </p>
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
                <EditItem
                  key={item.id}
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
          <Button type="secondary" text="Cancel" onClick={handleCloseEdit} />
          <Button
            type="primary submit"
            text="Save Changes"
            onClick={handleSaveChanges}
          />
        </div>
      </div>
    </StyledEditModal>
  );
};

export default EditModal;
