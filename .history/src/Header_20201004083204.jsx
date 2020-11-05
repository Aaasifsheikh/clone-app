import React from "react";
import logo from './Logo/1280px-Amazon.com-Logo.svg_.png';

function Header() {
  return (
    <div>
      <header>
        <navbar>
          <img src={logo} alt="logo" className="logo"/>
          <h1>Aasif Sheikh</h1>
        </navbar>
      </header>
    </div>
  );
}

export default Header;