import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./Logo/amazon_PNG24.png";


function Header() {
  return (
    <nav className="header">
    <NavLink to>

      <img src={logo} alt="logo" className="Header_logo" />
    </NavLink>
      
    </nav>
  );
}

export default Header;
