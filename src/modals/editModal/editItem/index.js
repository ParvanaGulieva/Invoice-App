import React from "react";
import Input from "../../../components/input";
import StyledEditItem from "./style";

const EditItem = ({ onRemoveItem, item, formik }) => {
  const totalPrice = (
    formik.values.items[item.index].quantity *
    formik.values.items[item.index].price
  ).toFixed(2);

  return (
    <StyledEditItem>
      <div className="row">
        <div className="name">
          <Input
            type="text"
            name={`items[${item.index}].itemName`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.items[item.index].itemName}
            className={
              formik.errors.items?.[item.index]?.itemName &&
              formik.touched.items?.[item.index]?.itemName
                ? "error"
                : ""
            }
          />
        </div>
        <div className="qty">
          <Input
            type="number"
            name={`items[${item.index}].quantity`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.items[item.index].quantity}
            className={
              formik.errors.items?.[item.index]?.quantity &&
              formik.touched.items?.[item.index]?.quantity
                ? "error"
                : ""
            }
          />
        </div>
        <div className="price">
          <Input
            type="number"
            name={`items[${item.index}].price`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.items[item.index].price}
            className={
              formik.errors.items?.[item.index]?.price &&
              formik.touched.items?.[item.index]?.price
                ? "error"
                : ""
            }
          />
        </div>
        <div className="total heading-S-variant">{totalPrice}</div>
        <div
          className="delete"
          onClick={() => onRemoveItem(formik.values.items[item.index].id)}
        >
          <svg
            width="13"
            height="16"
            viewBox="0 0 13 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.47225 0L9.36117 0.888875H12.4722V2.66667H0.027832V0.888875H3.13892L4.02783 0H8.47225ZM2.6945 16C1.71225 16 0.916707 15.2045 0.916707 14.2222V3.55554H11.5834V14.2222C11.5834 15.2045 10.7878 16 9.80562 16H2.6945Z"
              fill="#888EB0"
            />
          </svg>
        </div>
      </div>
    </StyledEditItem>
  );
};

export default EditItem;
