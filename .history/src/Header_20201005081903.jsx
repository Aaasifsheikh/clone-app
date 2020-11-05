import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./Logo/amazon_PNG11.png";
import SearchIcon from "@material-ui/icons/Search";

function Header() {
  return (
    <nav className="header">
      {/* logo on the left => img */}
      <NavLink to="/login">
        <img src={logo} alt="logo" className="Header_logo" />
      </NavLink>
      {/* Search Box */}
      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_searchIcon" />
      </div>
      {/* 3 Links */}
      <div className="header_nav">
        {/* 1st Link */}
        <Link className="header_link">
          <div className="header_option">
            <span>Hello Aasif</span>
            <span>Sign In</span>
          </div>
        </Link>
        {/* 2nd Links */}
        <Link className="header_link">
          <div className="header_option">
            <span>Return</span>
            <span>& order</span>
          </div>
        </Link>
        {/* 3rd Links */}
        <Link className="header_link">
          <div className="header_option">
            <span>Your</span>
            <span></span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;