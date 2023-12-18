import React from "react";
import StyledSidebar from "./style";
import logo from "../../assets/logo.svg";
import dark from "../../assets/dark.svg";
import light from "../../assets/light-mode-svgrepo-com 1.svg";
import profile from "../../assets/Oval.svg";

const Sidebar = ({ toggleTheme, theme }) => {
  return (
    <StyledSidebar>
      <img src={logo} alt="" className="logo" />
      <div className="sidebarBottom">
        <div className="theme" onClick={toggleTheme}>
          {theme === "light" ? (
            <img src={dark} alt="" />
          ) : (
            <img src={light} alt="" />
          )}
        </div>
        <img src={profile} className="profile" />
      </div>
    </StyledSidebar>
  );
};

export default Sidebar;
