import React from "react";
import StyledDetails from "./style";

const Details = ({ selectedItem }) => {
  const totalPrice = selectedItem.items
    .reduce((acc, i) => acc + i.quantity * i.price, 0)
    .toFixed(2);

  const ifAnyItem =
    selectedItem.items.length !== 0 &&
    selectedItem.items.every(
      (item) => item.itemName && item.quantity !== "" && item.price !== ""
    );

  return (
    <StyledDetails>
      <div className="main">
        <div className="top">
          <div className="id">
            <p className="heading-S-variant">
              <span>#</span>RT{selectedItem.id.toString().slice(-6)}
            </p>
            <p className="body-M">Graphic Design</p>
          </div>
          <div className="address">
            <p className="body-M">{selectedItem.clientAddress}</p>
          </div>
        </div>
        <div className="center">
          <div className="center-left">
            <div className="date">
              <p className="body-M">Invoice Date</p>
              <p className="heading-S-variant">{selectedItem.invoiceDate}</p>
            </div>
            <div className="invoice">
              <p className="body-M">Payment Due</p>
              <p className="heading-S-variant">
                {selectedItem.paymentDate
                  ? selectedItem.paymentDate.split("T")[0]
                  : "Not Paid yet"}
              </p>
            </div>
          </div>
          <div className="billTo">
            <p className="body-M">Bill To</p>
            <p className="heading-S-variant">{selectedItem.clientName}</p>
            <p className="body-M break">{selectedItem.streetAddress}</p>
          </div>
          <div className="sentTo">
            <p className="body-M">Sent to</p>
            <p className="heading-S-variant">{selectedItem.clientEmail}</p>
          </div>
        </div>
        {ifAnyItem && (
          <>
            <div className="table">
              <div className="header">
                <p className="body-M">Item Name</p>
                <p className="body-M quantity">QTY.</p>
                <p className="body-M price">Price</p>
                <p className="body-M total">Total</p>
              </div>
              {selectedItem.items.map((item) => (
                <div className="row" key={item.id}>
                  <p className="heading-S-variant">{item.itemName}</p>
                  <p className="body-M quantity">x {item.quantity}</p>
                  <p className="body-M price">
                    £ {item.price ? item.price.toFixed(2) : ""}
                  </p>
                  <p className="heading-S-variant total">
                    £ {(item.quantity * item.price).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
            <div className="footer">
              <p className="body-M">Amount Due</p>
              <p className="heading-M">£ {totalPrice}</p>
            </div>
          </>
        )}
      </div>
    </StyledDetails>
  );
};

export default Details;
