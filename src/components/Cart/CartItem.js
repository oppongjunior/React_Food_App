import React from "react";
import { BsPlus, BsTrash } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { increaseCartFavFunc, removeFromCartFunc } from "../../Redux/Actions";

function CartItem({ data }) {
  const { image, title, price, count, id } = data;

  const dispatch = useDispatch();
  const ProductState = useSelector((state) => state.ProductState);

  //increase Cart
  const increaseCart = () => {
    let newCartItem = {
      ...data,
      count: count + 1,
    };
    const newCart = ProductState.cart.map((item) => {
      if (item.id === id) {
        return newCartItem;
      }
      return item;
    });

    dispatch(increaseCartFavFunc(newCart));
  };

  //decrease cart
  const decreaseCart = () => {
    if (count > 1) {
      let newCartItem = {
        ...data,
        count: count - 1,
      };
      const newCart = ProductState.cart.map((item) => {
        if (item.id === id) {
          return newCartItem;
        }
        return item;
      });

      dispatch(increaseCartFavFunc(newCart));
    }
  };

  //remove Cart
  //removeCart
  const removeCart = () => {
    let newCart = ProductState.cart.filter((item) => item.id !== id);
    dispatch(removeFromCartFunc(newCart));
  };

  return (
    <tr>
      <td>
        <img src={image} alt="" className="img-fluid w-25" />
      </td>
      <td>{title}</td>
      <td>${price}</td>
      <td>${price * count}</td>
      <td className="d-flex align-items-center">
        <button className="btn btn-outline-dark" onClick={increaseCart}>
          <BsPlus size={10} />
        </button>
        <span className="mx-2 h5 text-secondary">{count}</span>
        <button className="btn btn-outline-dark" onClick={decreaseCart}>
          <BiMinus size={10} />
        </button>
      </td>
      <td>
        <button className="btn btn-danger" onClick={removeCart}>
          <BsTrash />
        </button>
      </td>
    </tr>
  );
}

export default CartItem;
