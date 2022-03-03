import React from "react";
import { Link } from "react-router-dom";
import { IoReorderFourOutline } from "react-icons/io5";
import { BiUserCircle } from "react-icons/bi";
import { BsCart4, BsHeart } from "react-icons/bs";
import { useSelector } from "react-redux";
import { getAuth, signOut } from "firebase/auth";
import { toast } from "react-toastify";
function Header() {
  const ProductState = useSelector((state) => state.ProductState);
  const auth = getAuth();
  let currentUser = null;

  if (localStorage.getItem("currentUser")) {
    currentUser = JSON.parse(localStorage.getItem("currentUser"));
  }

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        localStorage.removeItem("currentUser")
        toast.success("logout successfully!");
        window.location.href="/";
      })
      .catch((error) => {
        // An error happened.
        toast.error("couldn't log out")
      });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark bg-gradient">
      <div className="container">
        <Link className="navbar-brand text-uppercase" to="/">
          Finch
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
              <span className="nav-link text-uppercase">
                {currentUser !== null ? (
                  <>
                    <BiUserCircle size={24} style={{ marginRight: 4 }} />
                    {currentUser.user.email.substring(0, 2)}
                  </>
                ) : (
                  ""
                )}
              </span>
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

            {currentUser !== null ? (
              <li className="nav-item">
                <button
                  className="btn btn-outline-secondary ms-2 nav-link"
                  to="/login"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            ) : (
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
