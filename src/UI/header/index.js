import React from "react";
import StyledHeader from "./style";
import Button from "../../components/button";
import downIcon from "../../assets/down2.svg";

const Header = ({
  showFilter,
  handleClickFilter,
  handleOpenNewInvoice,
  data,
  setFilterStatus,
  filterStatus,
}) => {
  const handleFilterSelection = (selectedStatus) => {
    const newFilterStatus =
      selectedStatus === filterStatus ? "" : selectedStatus;
    setFilterStatus(newFilterStatus);
    // handleClickFilter();
  };
  return (
    <StyledHeader>
      <div className="header">
        <div className="title">
          <p className="heading-L">Invoices</p>
          <p className="body-M">There are {data.length} total invoices</p>
        </div>
        <div className="btn-container">
          <div className="filter">
            <div className="filter-dropdown" onClick={handleClickFilter}>
              <p className="heading-S-variant">Filter by status</p>
              <img src={downIcon} alt="" />
            </div>

            {showFilter && (
              <div className="dropdown">
                <div className="item">
                  <label className="checkboxContainer">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      checked={filterStatus === "Draft"}
                      onClick={() => handleFilterSelection("Draft")}
                    />
                    <span className="checkmark"></span>
                  </label>
                  <p className="heading-S">Draft</p>
                </div>
                <div className="item">
                  <label className="checkboxContainer">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      checked={filterStatus === "Pending"}
                      onClick={() => handleFilterSelection("Pending")}
                    />
                    <span className="checkmark"></span>
                  </label>
                  <p className="heading-S">Pending</p>
                </div>
                <div className="item">
                  <label className="checkboxContainer">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      checked={filterStatus === "Paid"}
                      onClick={() => handleFilterSelection("Paid")}
                    />
                    <span className="checkmark"></span>
                  </label>
                  <p className="heading-S">Paid</p>
                </div>
              </div>
            )}
          </div>

          <Button
            type="primaryAdd"
            text="New Invoice"
            onClick={handleOpenNewInvoice}
          />
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
