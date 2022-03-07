import React from "react";
import {
  BsFillCartPlusFill,
  BsFillCartDashFill,
  BsHeartFill,
  BsHeart,
  BsStarFill,
} from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCartFunc,
  addToFavFunc,
  removeFromCartFunc,
  removeFromFavFunc,
} from "../../Redux/Actions";

function FoodItem({ food = {} }) {
  const ProductState = useSelector((state) => state.ProductState);
  const dispatch = useDispatch();

  const inCart = ProductState.cart.filter((item) => item.id === food.id);
  const inFav = ProductState.fav.filter((item) => item.id === food.id);

  const addToCart = () => {
    let newCart = [...ProductState.cart, { ...food, count: 1 }];
    dispatch(addToCartFunc(newCart));
  };

  //removeCart
  const removeCart = () => {
    let newCart = ProductState.cart.filter((item) => item.id !== food.id);
    dispatch(removeFromCartFunc(newCart));
  };

  //add fav
  const addToFav = () => {
    let newFav = [...ProductState.fav, food];
    dispatch(addToFavFunc(newFav));
  };

  //remove fav
  const removeFav = () => {
    let newFav = ProductState.fav.filter((item) => item.id !== food.id);
    dispatch(removeFromFavFunc(newFav));
  };

  return (
    <div className="col-sm-6 col-md-4 col-lg-3">
      <div className="food-item-box">
        <img src={food.imgSrc} className="" alt="" />
        <h6 className="h6 food-item-title mt-3">{food.name}</h6>
        <span>
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
        </span>
        <h6 className="h6 price mt-2 ">${food.price}</h6>
        <span
          className={`${
            inCart.length === 0
              ? "food-cart-icon-container"
              : "food-cart-icon-container active-color"
          }`}
        >
          {inCart.length === 0 ? (
            <BsFillCartPlusFill size={24} onClick={addToCart} />
          ) : (
            <BsFillCartDashFill size={24} onClick={removeCart} />
          )}
        </span>
        <span className="food-fav-icon-container">
          {inFav.length === 0 ? (
            <BsHeart size={20} onClick={addToFav} />
          ) : (
            <BsHeartFill size={20} onClick={removeFav} />
          )}
        </span>
      </div>
    </div>
  );
}

export default FoodItem;
