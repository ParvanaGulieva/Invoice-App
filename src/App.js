import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import DetailedRowPage from "./pages/DetailedRowPage";

function App() {
  const [theme, setTheme] = useState("light");
  const [showNewInvoiceModal, setShowNewInvoiceModal] = useState(false);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const handleCloseModal = () => {
    setShowNewInvoiceModal(false);
  };

  const handleOpenNewInvoice = () => {
    setShowNewInvoiceModal(true);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <MainPage
              toggleTheme={toggleTheme}
              theme={theme}
              showNewInvoiceModal={showNewInvoiceModal}
              handleCloseModal={handleCloseModal}
              handleOpenNewInvoice={handleOpenNewInvoice}
            />
          }
        />
        <Route
          path="/:id"
          element={<DetailedRowPage toggleTheme={toggleTheme} theme={theme} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// plus button doesnt align center
// select dropdown icon
// filter icon animation
