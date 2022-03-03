import React from "react";
import { Link } from "react-router-dom";
import { IoReorderFourOutline } from "react-icons/io5";
import { BsCart4, BsHeart } from "react-icons/bs";
import { useSelector } from "react-redux";
function Header() {
  const ProductState = useSelector((state) => state.ProductState);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark bg-gradient">
      <div className="container">
        <Link className="navbar-brand text-uppercase" to="/">
          Web Shop
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <IoReorderFourOutline />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-icons-container" to="/cart">
                <BsCart4 />
                <span className="nav-icons-text">
                  {ProductState.cart.length}
                </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-icons-container" to="/favorites">
                <BsHeart />
                <span className="nav-icons-text">
                  {ProductState.fav.length}
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
