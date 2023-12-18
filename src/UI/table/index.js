import React from "react";
import { Link } from "react-router-dom";
import StyledTable from "./style";
import Row from "../../components/row";

const Table = ({ data }) => {
  const reversedData = [...data].reverse();
  return (
    <StyledTable>
      {reversedData.map((item, index) => (
        <Link to={`/${item.id}`} key={item.id}>
          <Row item={{ ...item, index }} />
        </Link>
      ))}
    </StyledTable>
  );
};

export default Table;
