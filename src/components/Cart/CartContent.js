import React from "react";
import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import { clearCartFunc } from "../../Redux/Actions";
function CartContent() {
  const ProductState = useSelector((state) => state.ProductState);
  const dispatch = useDispatch();

  if (ProductState.cart.length === 0) {
    return (
      <div className="col-md-10">
        <div className="alert alert-danger" role="alert">
          No Item in cart
        </div>
      </div>
    );
  }

  let grandTotal = ProductState.cart.reduce(function (acc, curr) {
    return acc + curr.count * curr.price;
  }, 0);

  grandTotal = grandTotal.toFixed(2);


  //clear cart
  const clearCart = ()=>{
    dispatch(clearCartFunc([]));
  }


  return (
    <div className="col-md-10 py-5 my-5">
      <div className="table-responsive">
        <table class="table">
          <thead class="thead-inverse">
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Subtotal</th>
              <th>Count</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {ProductState.cart.map((item) => (
              <CartItem key={item.id} data={item} />
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <h4 className="d-flex justify-content-between">
          Total <span>${grandTotal}</span>
        </h4>
        <div className="text-center">
          <button className="btn btn-outline-danger my-2" onClick={clearCart}>CLEAR CART</button>
        </div>
      </div>
    </div>
  );
}

export default CartContent;
