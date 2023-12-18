import React, { useState } from "react";
import { useParams } from "react-router-dom";
import StyledDetailedRow from "./style";
import Sidebar from "../../UI/sidebar";
import RowHeader from "../../UI/rowHeader";
import Details from "../../UI/details";
import EditModal from "../../modals/editModal";

const DetailedRowPage = ({ toggleTheme, theme }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const { id } = useParams();
  const data = JSON.parse(localStorage.getItem("form_data"));
  const selectedItem = data.find((item) => item.id === id);

  const handleCloseEdit = () => {
    setShowEditModal(false);
  };

  const handlePaid = () => {
    selectedItem.status = "Paid";
    let date = new Date();

    const updatedData = data.map((item) =>
      item.id === id
        ? {
            ...selectedItem,
            paymentDate: date,
          }
        : item
    );
    localStorage.setItem("form_data", JSON.stringify(updatedData));
    setIsClicked(true);
  };

  return (
    <StyledDetailedRow className={theme}>
      <Sidebar toggleTheme={toggleTheme} theme={theme} />
      <RowHeader
        selectedItem={selectedItem}
        data={data}
        id={id}
        handlePaid={handlePaid}
        isClicked={isClicked}
        setShowEditModal={setShowEditModal}
      />
      <Details selectedItem={selectedItem} />
      {showEditModal && (
        <EditModal
          handleCloseEdit={handleCloseEdit}
          selectedItem={selectedItem}
        />
      )}
    </StyledDetailedRow>
  );
};

export default DetailedRowPage;
