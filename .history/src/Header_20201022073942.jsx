import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import logo from "./Logo/amazon_PNG11.png";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import Show from './Show';

function Header() {
  const history = useHistory();

  const showResult = history.push()

  return (
    <nav className="header">
      {/* logo on the left => img */}
      <NavLink to="/">
        <img src={logo} alt="logo" className="Header_logo" />
      </NavLink>
      {/* Search Box */}
      <div className="header_search">
        <input type="text" className="header_searchInput" onClick={showResult}/>
        <SearchIcon className="header_searchIcon" />
      </div>
      {/* 3 Links */}
      <div className="header_nav">
        {/* 1st Link */}
        <NavLink to="/login" className="header_link">
          <div className="header_option">
            <span className="header_optionLineOne">Hello Aasif</span>
            <span className="header_optionLineTwo">Sign In</span>
          </div>
        </NavLink>
        {/* 2nd Links */}
        <NavLink to="/" className="header_link">
          <div className="header_option">
            <span className="header_optionLineOne">Return</span>
            <span className="header_optionLineTwo">& Order</span>
          </div>
        </NavLink>
        {/* 3rd Links */}
        <NavLink to="/" className="header_link">
          <div className="header_option">
            <span className="header_optionLineOne">Your</span>
            <span className="header_optionLineTwo">Prime</span>
          </div>
        </NavLink>
        <NavLink to="/checkout" className="header_link">
          <div className="header_optionBasket">
            {/* Shopping Basket icon */}
            <ShoppingBasketIcon />
            {/* Number of item in the basket */}

            <span className="option_LineTwo header_basketCount">0</span>
          </div>
        </NavLink>
      </div>
    </nav>
  );
}

export default Header;
