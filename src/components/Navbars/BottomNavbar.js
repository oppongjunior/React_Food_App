import React from "react";
import { Link } from "react-router-dom";
import { BiHome, BiHeart, BiCog, BiListOl } from "react-icons/bi";
import "./Navbar.css";

function BottomNavbar() {

  return (
    <div className="bottom-navbar">
      <ul>
        <li>
          <Link to="/" className="bottom-navbar-link">
            <BiHome className="bottom-icon" />
          </Link>
        </li>
        <li>
          <Link to="favorites" className="bottom-navbar-link">
            <BiHeart className="bottom-icon" />
          </Link>
        </li>
        <li>
          <Link to="/" className="bottom-navbar-link">
            <BiListOl className="bottom-icon" />
          </Link>
        </li>
        <li>
          <Link to="/" className="bottom-navbar-link">
            <BiCog className="bottom-icon" />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default BottomNavbar;
