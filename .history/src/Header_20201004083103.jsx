import React from "react";
import logo from './Logo/1280px-Amazon.com-Logo.svg_.png';

function Header() {
  return (
    <div>
      <header>
        <nav>
          <img src={logo} alt="logo" className="loo"/>
          <h1>Aasif Sheikh</h1>
        </nav>
      </header>
    </div>
  );
}

export default Header;
