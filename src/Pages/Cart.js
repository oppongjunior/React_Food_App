import React from "react";
import CartContent from "../components/Cart/CartContent";
import Layout from "../components/Layout/Layout";

function Cart() {
  return (
    <Layout>
      <div className="cart-content">
        <div className="container">
          <div className="row justify-content-center">
            <CartContent />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Cart;
