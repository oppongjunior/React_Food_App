import React, { useEffect, useState } from "react";
import { BsCart, BsBadgeWc } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import Logo from "../../assets/logo.jpg";
import "./Navbar.css";
import { useSelector, useDispatch } from "react-redux";
import { searchFoodFunc, showCartFunc } from "../../Redux/Actions";

function TopNavbar() {
  const [searchText, setSearchText] = useState("");
  const ProductState = useSelector((state) => state.ProductState);
  const dispatch = useDispatch();
  const showCart = () => {
    dispatch(showCartFunc(true));
  };

  const handleChange = (e) => {
    setSearchText(e.currentTarget.value);
   console.log(searchText);
  };

  return (
    <div className="top-navbar">
      <div className="container h-100">
        <div className="top-navbar-box h-100">
          <img src={Logo} className="top-navbar-logo me-2" alt="" />
          <form
            onSubmit={(e) => e.preventDefault()}
            className="top-navbar-form"
          >
            <div class="search__container">
              <input
                class="search__input"
                type="text"
                placeholder="Search Foods"
                value={searchText}
                onChange={handleChange}
              />
            </div>
          </form>
          <span className="top-navbar-cart-icon ms-2">
            <BsCart size={24} />
            <span className="cart-count">{ProductState.cart.length}</span>
          </span>

          <FaBars
            size={24}
            className="top-navbar-toggle-icon d-lg-none ms-4"
            onClick={showCart}
          />
        </div>
      </div>
    </div>
  );
}

export default TopNavbar;
