import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { LocationOnOutlined, ShoppingBasket } from "@material-ui/icons";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="new"
        />
      </Link>

      <LocationOnOutlined className="header_locationIcon" />
      <div className="header_Option">
        <span className="header_optionLineOne "> Hello</span>
        <span className="header_optionLineTwo">Select your address</span>
      </div>

      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <div className="header_Option">
          <span className="header_optionLineOne">Hello,Sign In</span>
          <span className="header_optionLineTwo">Accounts & Lists</span>
        </div>
        <div className="header_Option">
          <span className="header_optionLineOne">Returns</span>
          <span className="header_optionLineTwo">& Orders</span>
        </div>
        <div className="header_Option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header_optionBasket">
            <ShoppingBasket />
            <span className="header_basketCount header_optionLineTwo  ">0</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
