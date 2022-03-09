import React from "react";
import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";
import { clearCartFunc, showCartFunc } from "../../Redux/Actions";
import VisCardImage from "../../assets/visa_card.jpg";
import CartItem from "./CartItem";
import { BsCartXFill, BsPatchCheckFill } from "react-icons/bs";
import { IoReturnUpForwardOutline } from "react-icons/io5";

function Cart() {
  const ProductState = useSelector((state) => state.ProductState);
  const dispatch = useDispatch();
  const closeCart = () => {
    dispatch(showCartFunc(false));
  };

  let grandTotal = ProductState.cart.reduce(function (acc, curr) {
    return acc + curr.count * curr.price;
  }, 0);

  grandTotal = grandTotal.toFixed(2);

  //clear cart
  const clearCart = () => {
    dispatch(clearCartFunc([]));
  };

  return (
    <>
      <div
        className={`${
          ProductState.showCart ? "show-cart cart-box" : "cart-box"
        }`}
      >
        <IoReturnUpForwardOutline size={30} className="close-cart" onClick={closeCart} />
        <div className="container h-100">
          <div className="px-3 h-25 text-center img-box">
            <img src={VisCardImage} alt="" className="h-100" />
          </div>
          <div className="h-75">
            <div className="cart-content h-75">
              {ProductState.cart.length === 0 ? (
                <>
                  <lottie-player
                    src="https://assets8.lottiefiles.com/packages/lf20_47pyyfcf.json"
                    background="transparent"
                    speed="1"
                    style={{ width: "300px", height: "300px" }}
                    loop
                    autoplay
                  ></lottie-player>
                </>
              ) : (
                <>
                  <div className="cart-list d-flex justify-content-between my-3">
                    <h4 className="h6">Items in Cart</h4>
                    <h5 className="h6">{ProductState.cart.length}</h5>
                  </div>
                  <div className="table-responsive ">
                    <table className="table table-borderless">
                      <tbody>
                        {ProductState.cart.map((item) => (
                          <CartItem key={item.id} data={item} />
                        ))}
                      </tbody>
                    </table>
                  </div>
                </>
              )}
            </div>
            {ProductState.cart.length === 0 ? (
              ""
            ) : (
              <div className="h-25 d-flex align-items-center">
                <div className="w-100 text-center">
                  <h5 className="h5 d-flex justify-content-between">
                    Total <span>${grandTotal}</span>
                  </h5>
                  <button className="btn btn-warning d-block w-100">
                    Order <BsPatchCheckFill />
                  </button>
                  <button
                    className="btn btn-outline-danger d-block w-100 my-2"
                    onClick={clearCart}
                  >
                    Empty <BsCartXFill />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div
        className={`${
          ProductState.showCart ? "show-cart cart-overlay" : "cart-overlay"
        }`}
      ></div>
    </>
  );
}

export default Cart;
