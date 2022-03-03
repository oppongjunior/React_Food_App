import { ActionTypes } from "./ActionTypes";

const loadCart = (payload) => ({
  type: ActionTypes.LOAD_CART,
  payload: payload,
});
const loadfav = (payload) => ({
  type: ActionTypes.LOAD_FAV,
  payload: payload,
});
const addCart = (payload) => ({
  type: ActionTypes.ADD_CART,
  payload: payload,
});
const addFav = (payload) => ({
  type: ActionTypes.ADD_FAV,
  payload: payload,
});
const removeCart = (payload) => ({
  type: ActionTypes.REMOVE_CART,
  payload: payload,
});
const removeFav = (payload) => ({
  type: ActionTypes.REMOVE_FAV,
  payload: payload,
});
const clearCart = (payload) => ({
  type: ActionTypes.CLEAR_CART,
  payload: payload,
});
const increaseCart = (payload) => ({
  type: ActionTypes.INCREASE_CART,
  payload: payload,
});
const decreaseCart = (payload) => ({
  type: ActionTypes.DECREASE_CART,
  payload: payload,
});

//load cart Function
export const loadCartFunc = () => {
  return (dispatch) => {
    let data = [];
    if (localStorage.getItem("cart")) {
      data = localStorage.getItem("cart");
      data = JSON.parse(data);
    }
    dispatch(loadCart(data));
  };
};

//load fav function
export const loadFavFunc = () => {
  return (dispatch) => {
    let data = [];
    if (localStorage.getItem("favorites")) {
      data = localStorage.getItem("favorites");
      data = JSON.parse(data);
    }
    dispatch(loadfav(data));
  };
};

//addTo cart
export const addToCartFunc = (data) => {
  return (dispatch) => {
    localStorage.setItem("cart", JSON.stringify(data));
    dispatch(addCart(data));
  };
};

//removeFrom cart
export const removeFromCartFunc = (data) => {
  return (dispatch) => {
    localStorage.setItem("cart", JSON.stringify(data));
    dispatch(removeCart(data));
  };
};
//addTo cart
export const addToFavFunc = (data) => {
  return (dispatch) => {
    localStorage.setItem("favorites", JSON.stringify(data));
    dispatch(addFav(data));
  };
};

//removeFrom cart
export const removeFromFavFunc = (data) => {
  return (dispatch) => {
    localStorage.setItem("favorites", JSON.stringify(data));
    dispatch(removeFav(data));
  };
};
//removeFrom cart
export const increaseCartFavFunc = (data) => {
  return (dispatch) => {
    localStorage.setItem("cart", JSON.stringify(data));
    dispatch(increaseCart(data));
  };
};

//removeFrom cart
export const decreaseCartFunc = (data) => {
  return (dispatch) => {
    localStorage.setItem("cart", JSON.stringify(data));
    dispatch(decreaseCart(data));
  };
};
//clear cart
export const clearCartFunc = (data) => {
  return (dispatch) => {
    localStorage.setItem("cart", JSON.stringify(data));
    dispatch(clearCart(data));
  };
};
