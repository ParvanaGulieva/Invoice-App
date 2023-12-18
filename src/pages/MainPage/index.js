import React, { useState, useEffect } from "react";
import StyledMainPage from "./style";
import Sidebar from "../../UI/sidebar";
import Header from "../../UI/header";
import Table from "../../UI/table";
import EmptyPage from "../../UI/emptyPage";
import NewInvoice from "../../modals/newInvoice";
import { userSchema } from "../../validation/formValidation";
import { useFormik } from "formik";

const MainPage = ({
  toggleTheme,
  theme,
  showNewInvoiceModal,
  handleCloseModal,
  handleOpenNewInvoice,
}) => {
  const [showFilter, setShowFilter] = useState(false);
  const [filterStatus, setFilterStatus] = useState("");
  const [data, setData] = useState([]);

  const formik = useFormik({
    initialValues: {
      id: "",
      status: "",
      streetAddress: "",
      city: "",
      postCode: "",
      country: "",
      clientName: "",
      clientEmail: "",
      clientAddress: "",
      clientCity: "",
      clientPostCode: "",
      clientCountry: "",
      invoiceDate: "",
      description: "",
      items: [
        { itemName: "", quantity: "", price: "", id: Date.now().toString() },
      ],
      selectedOption: "",
      paymentDate: "",
    },
    validationSchema: userSchema,
    // validateOnChange: false,
  });

  useEffect(() => {
    const storedData = localStorage.getItem("form_data");
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  const handleClickFilter = () => {
    setShowFilter((prev) => !prev);
  };

  const saveData = () => {
    const newData = [...data, formik.values];
    setData(newData);
    localStorage.setItem("form_data", JSON.stringify(newData));
  };

  return (
    <StyledMainPage className={theme}>
      <Sidebar toggleTheme={toggleTheme} theme={theme} />
      <Header
        handleClickFilter={handleClickFilter}
        showFilter={showFilter}
        handleOpenNewInvoice={handleOpenNewInvoice}
        data={data.filter(
          (item) => filterStatus === "" || item.status === filterStatus
        )}
        setFilterStatus={setFilterStatus}
        filterStatus={filterStatus}
      />
      {data.length ? (
        <Table
          data={data.filter(
            (item) => filterStatus === "" || item.status === filterStatus
          )}
        />
      ) : (
        <EmptyPage handleOpenNewInvoice={handleOpenNewInvoice} />
      )}
      {showNewInvoiceModal && (
        <NewInvoice
          formik={formik}
          show={showNewInvoiceModal}
          handleCloseModal={handleCloseModal}
          data={data}
          saveData={saveData}
        />
      )}
    </StyledMainPage>
  );
};

export default MainPage;
