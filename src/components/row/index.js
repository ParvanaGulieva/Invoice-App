import React, { useEffect, useState } from "react";
import StyledRow from "./style";
import Badge from "../badge";
import right from "../../assets/right.svg";

const Row = ({ item }) => {
  const totalPrice = item.items
    .reduce((acc, i) => acc + i.quantity * i.price, 0)
    .toFixed(2);

  return (
    <StyledRow>
      <div className="id">
        <p className="heading-S-variant">
          <span>#</span>RT{item.id.toString().slice(-6)}
        </p>
      </div>
      <p className="body-M-variant date">{item.invoiceDate}</p>
      <p className=" body-M-variant name">{item.clientName}</p>
      <p className=" heading-S-variant price">£ {totalPrice}</p>
      <Badge type={item.status} />
      <img src={right} className="right" />
    </StyledRow>
  );
};

export default Row;
