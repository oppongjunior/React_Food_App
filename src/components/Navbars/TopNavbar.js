import React, {useState} from "react";
import { BsCart, BsBadgeWc } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import Logo from "../../assets/logo.jpg";
import "./Navbar.css";
import { useSelector, useDispatch } from "react-redux";
import { showCartFunc } from "../../Redux/Actions";

function TopNavbar() {
  const [searchText, setSearchText] = useState("");
  const ProductState = useSelector((state) => state.ProductState);
  const dispatch = useDispatch();
  const showCart = () => {
    dispatch(showCartFunc(true));
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
            <input
              type="search"
              className="form-control top-navbar-search"
              name="name"
              id="name"
              placeholder="Search Food"
              aria-label=""
            />
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
