import React from "react";
import { useNavigate } from "react-router-dom"; 
import StyledConfirmDelete from "./style";
import Button from "../../components/button";

const ConfirmDelete = ({ setShowDeleteModal,id }) => {
  const navigate = useNavigate();
  const data=JSON.parse(localStorage.getItem('form_data'))

const handleDeleteInvoice=()=>{
const updatedData=data.filter(item=>item.id!==id)
navigate('/')
localStorage.setItem('form_data',JSON.stringify(updatedData))
// console.log(data)
}

  return (
    <StyledConfirmDelete>
      <div className="modal">
        <p className="heading-M">Confirm Deletion</p>
        <p className="body-S description">
          Are you sure you want to delete invoice <b> RT{id.toString().slice(-6)} </b> This action cannot
          be undone.
        </p>
        <div className="btn-container">
          <Button
            type="secondary"
            text="Cancel"
            onClick={() => setShowDeleteModal(false)}
          />
          <Button type="delete" text="Delete" onClick={handleDeleteInvoice} />
        </div>
      </div>
    </StyledConfirmDelete>
  );
};

export default ConfirmDelete;
