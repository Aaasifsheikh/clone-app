import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./Logo/amazon_PNG11.png";


function Header() {
  return (
    <nav className="header">
    {/* logo on the left => img */}
    <NavLink to="/login">

      <img src={logo} alt="logo" className="Header_logo" />
    </NavLink>
    
      
    </nav>
  );
}

export default Header;
