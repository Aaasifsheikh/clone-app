import React from "react";
import logo from "./Logo/amazon_PNG24.png";


function Header() {
  return (
    <nav className="header">
      <img src={logo} alt="logo" className="Header_logo" />
      
    </nav>
  );
}

export default Header;
