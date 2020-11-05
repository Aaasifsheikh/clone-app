import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./Logo/amazon_PNG11.png";


function Header() {
  return (
    <nav className="header">
    logo on the lef
    <NavLink to="/login">

      <img src={logo} alt="logo" className="Header_logo" />
    </NavLink>
      
    </nav>
  );
}

export default Header;
