import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import StyledRowHeader from "./style";
import Badge from "../../components/badge";
import Button from "../../components/button";
import back from "../../assets/left.svg";
import ConfirmDelete from "../../modals/confirmDelete";

const RowHeader = ({ selectedItem, id, handlePaid, setShowEditModal }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const navigate = useNavigate();

  const handleDeletePopup = () => {
    setShowDeleteModal(true);
  };

  const handleOpenEdit = () => {
    setShowEditModal(true);
  };

  return (
    <StyledRowHeader>
      <div className="goBack" onClick={() => navigate(-1)}>
        <img src={back} alt="" />
        <p className="heading-S-variant">Go back</p>
      </div>
      <div className="header">
        <div className="status">
          <p className="body-M-variant">Status</p>
          <Badge type={selectedItem.status} />
        </div>
        <div className="btn-container">
          <Button type="secondary" text="Edit" onClick={handleOpenEdit} />
          <Button type="delete" text="Delete" onClick={handleDeletePopup} />
          <Button
            type="primary"
            text="Mark as Paid"
            onClick={handlePaid}
            disabled={
              (selectedItem.paymentDate ? true : false) ||
              selectedItem.status === "Draft"
            }
          />
        </div>
      </div>
      {showDeleteModal && (
        <ConfirmDelete setShowDeleteModal={setShowDeleteModal} id={id} />
      )}
    </StyledRowHeader>
  );
};

export default RowHeader;
