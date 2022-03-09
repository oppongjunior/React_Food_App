import React from "react";
import Cart from "../components/Cart/Cart";
import { useSelector } from "react-redux";
import FoodItem from "../components/Foods/FoodItem";

function Favorites() {
  const ProductState = useSelector((state) => state.ProductState);

  return (
    <>
     
      <div className="body">
        <div className="main-content my-5">
          <div className="container my-5">
            <h5 className="title h5">All Foods</h5>
            <div className="row">
              {ProductState.fav.map((item) => (
                <FoodItem key={item.id} food={item} />
              ))}
            </div>
          </div>
          <Cart />
        </div>
      </div>
    </>
  );
}

export default Favorites;
