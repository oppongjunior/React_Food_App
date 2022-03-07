import React from "react";
import Image from "../../assets/image_1.jpg";
import {
  BsFillPatchMinusFill,
  BsFillPatchPlusFill,
  BsTrash,
} from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { increaseCartFavFunc, removeFromCartFunc } from "../../Redux/Actions";

function CartItem({ data = {} }) {
  const { name = "Burger", price = "10", count = "1", imgSrc = "" } = data;

  const dispatch = useDispatch();
  const ProductState = useSelector((state) => state.ProductState);

  //increase Cart
  const increaseCart = () => {
    let newCartItem = {
      ...data,
      count: count + 1,
    };
    const newCart = ProductState.cart.map((item) => {
      if (item.id === data.id) {
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
        if (item.id === data.id) {
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
    let newCart = ProductState.cart.filter((item) => item.id !== data.id);
    dispatch(removeFromCartFunc(newCart));
  };

  return (
    <tr>
      <td scope="row">
        <img src={imgSrc || Image} alt="" className="cart-item-image" />
      </td>
      <td>
        <div className="ms-2">
          <h6 className="cart-item-name">{name}</h6>
          <h6 className="cart-item-quantity">x{count}</h6>
        </div>
      </td>
      <td>
        <div className="d-flex">
          <BsFillPatchMinusFill
            size={24}
            className="cart-item-icon"
            onClick={decreaseCart}
          />
          <BsFillPatchPlusFill
            size={24}
            className="ms-2 cart-item-icon"
            onClick={increaseCart}
          />
        </div>
      </td>
      <td>
        <div className="cart-item-price h6">${price}</div>
      </td>
      <td>
        <BsTrash color="red" onClick={removeCart} />
      </td>
    </tr>
  );
}

export default CartItem;
