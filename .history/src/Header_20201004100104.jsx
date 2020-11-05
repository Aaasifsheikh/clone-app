import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./Logo/amazon_PNG11.png";
import SearchIcon from '@material-ui/icons/Search';


function Header() {
  return (
    <nav className="header">
    {/* logo on the left => img */}
    <NavLink to="/login">

      <img src={logo} alt="logo" className="Header_logo" />
    </NavLink>
    {/* Search Box */}
    <input type="text" className="header_searchInput" />
     <SearchIcon className="header_searchIcon"/>
      
    </nav>
  );
}

export default Header;
