import * as yup from "yup";

const options = ["Net 1 Day", "Net 7 Days", "Net 14 Days", "Net 30 Days"];

export const userSchema = yup.object().shape({
  streetAddress: yup.string().required("Address is required"),
  city: yup.string().required("City is required"),
  postCode: yup.string().required("Required"),
  country: yup.string().required("Country is required"),
  clientName: yup.string().required("Name is required"),
  clientEmail: yup
    .string()
    .required("Email is required")
    .email("Invalid email"),
  clientAddress: yup.string().required("Address is required"),
  clientCity: yup.string().required("City is required"),
  clientPostCode: yup.string().required("Required"),
  clientCountry: yup.string().required("Country is required"),
  invoiceDate: yup.date().required("Date is required"),
  description: yup.string().required("Description is required"),
  items: yup.array().of(
    yup.object().shape({
      itemName: yup.string().required("Required"),
      quantity: yup.string().required("Required"),
      price: yup.string().required("Required"),
    })
  ),
  selectedOption: yup.string().required("Select an option").oneOf(options),
});
