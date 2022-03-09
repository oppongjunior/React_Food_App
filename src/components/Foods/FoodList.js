import React from "react";
import { useSelector } from "react-redux";
import "./Food.css";
import FoodItem from "./FoodItem";

function FoodList() {
  const Productstate = useSelector(state=>state.ProductState)
  return (
    <div>
      <h5 className="title h5">Foods</h5>
      <div className="row">{Productstate.foods.map((item) => <FoodItem key={item.id} food={item} />)}</div>
    </div>
  );
}

export default FoodList;
