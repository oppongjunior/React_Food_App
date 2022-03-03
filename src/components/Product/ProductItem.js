import React from "react";
import "./Product.css";
import { BsHeart, BsCartPlus, BsHeartFill, BsCartXFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCartFunc,
  addToFavFunc,
  removeFromCartFunc,
  removeFromFavFunc,
} from "../../Redux/Actions";

function ProductItem({ product }) {
  const ProductState = useSelector((state) => state.ProductState);
  const dispatch = useDispatch();

  const inCart = ProductState.cart.filter((item) => item.id === product.id);
  const inFav = ProductState.fav.filter((item) => item.id === product.id);

  const addToCart = () => {
    let newCart = [...ProductState.cart, {...product, count:1}];
    dispatch(addToCartFunc(newCart));
  };

  //removeCart
  const removeCart = () => {
    let newCart = ProductState.cart.filter((item) => item.id !== product.id);
    dispatch(removeFromCartFunc(newCart));
  };

  //add fav
  const addToFav = () => {
    let newFav = [...ProductState.fav, product];
    dispatch(addToFavFunc(newFav));
  };

  //remove fav
  const removeFav = () => {
    let newFav = ProductState.fav.filter((item) => item.id !== product.id);
    dispatch(removeFromFavFunc(newFav));
  };

  return (
    <div className="col-md-6 col-lg-3 my-3">
      <div className="product-box text-center">
        <div className="p-5">
          <Link to={`/product/${product.id}`}>
            <img src={product.image} className="product-image" alt="..." />
          </Link>
        </div>
        <div className="card-body">
          <h6 className="card-title">
            <Link
              to={`/product/${product.id}`}
              className="text-dark text-decoration-none"
            >
              {product.title}
            </Link>
          </h6>
          <h6 className="card-subtitle">${product.price}</h6>
          <div className="rating-box"></div>
        </div>
        <span className="product-fav-icon">
          {inFav.length === 0 ? (
            <BsHeart size={20} onClick={addToFav} />
          ) : (
            <BsHeartFill size={20} onClick={removeFav} />
          )}
        </span>
        <span className="product-cart-icon">
          {inCart.length === 0 ? (
            <BsCartPlus size={20} onClick={addToCart} />
          ) : (
            <BsCartXFill size={20} onClick={removeCart} />
          )}
        </span>
      </div>
    </div>
  );
}

export default ProductItem;
