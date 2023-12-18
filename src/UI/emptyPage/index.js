import React from "react";
import StyledEmptyPage from "./style";
import illustration from "../../assets/Email campaign_Flatline 2.svg";

const EmptyPage = ( {handleOpenNewInvoice}) => {
  return (
    <StyledEmptyPage>
      <img src={illustration} alt="" />
      <div className="title">
        <p className="heading-M">There is nothing here</p>
        <p className="body-M-variant">
          Create an invoice by clicking the
          <span className="link" onClick={handleOpenNewInvoice} > New Invoice </span> button and get started
        </p>
      </div>
    </StyledEmptyPage>
  );
};

export default EmptyPage;
