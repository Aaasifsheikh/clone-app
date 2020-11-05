import React from "react";
import logo from "./Logo/amazon_PNG24.png"";

function Header() {
  return (
    <nav className="header">
      <img src={logo} alt="logo" className="logo" />
      <h1>Aasif Sheikh</h1>
    </nav>
  );
}

export default Header;
