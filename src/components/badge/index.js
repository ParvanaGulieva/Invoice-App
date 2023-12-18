import React from "react";
import StyledBadge from "./style";

const Badge = ({ type }) => {
  // console.log(text);
  return (
    <StyledBadge className={`badge ${type}`}>
      <div className="round"></div>
      <p className="status">{type}</p>
    </StyledBadge>
  );
};

export default Badge;
