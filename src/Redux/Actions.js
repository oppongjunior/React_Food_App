import { ActionTypes } from "./ActionTypes";
import { collection, getDocs, query, where } from "firebase/firestore";
import fireDB from "../FireConfig";

const loadFoodsStart = (payload) => ({
  type: ActionTypes.LOAD_FOODS_START,
  payload: payload,
});
const loadFoodsSuccess = (payload) => ({
  type: ActionTypes.LOAD_FOODS_SUCCESS,
  payload: payload,
});
const loadFoodsFailed = (payload) => ({
  type: ActionTypes.LOAD_FOODS_FAILED,
  payload: payload,
});

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
const showCart = (payload) => ({
  type: ActionTypes.SHOW_CART,
  payload: payload,
});

//load cart Function
export const loadCartFunc = () => {
  return (dispatch) => {
    let data = [];
    if (localStorage.getItem("food_cart")) {
      data = localStorage.getItem("food_cart");
      data = JSON.parse(data);
    }
    dispatch(loadCart(data));
  };
};

//load fav function
export const loadFoodsFunc = () => {
  return async (dispatch) => {
    dispatch(loadFoodsStart(true));
    let data = [];
    try {
      const querySnapshot = await getDocs(collection(fireDB, "foods"));
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        data.push(doc.data());
      });
      dispatch(loadFoodsSuccess(data));
    } catch (error) {
      console.log(error);
      dispatch(loadFoodsFailed(true));
    }
  };
};

//select category fuction
export const selectCategoryFunc = (id) => {
  return async (dispatch) => {
    dispatch(loadFoodsStart(true));
    let data = [];
    try {
      const querySnapshot = await getDocs(
        query(collection(fireDB, "foods"), where("itemId", "==", id))
      );
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        data.push(doc.data());
      });
      dispatch(loadFoodsSuccess(data));
    } catch (error) {
      console.log(error);
      dispatch(loadFoodsFailed(true));
    }
  };
};

//load fav function
export const loadFavFunc = () => {
  return (dispatch) => {
    let data = [];
    if (localStorage.getItem("food_favorites")) {
      data = localStorage.getItem("food_favorites");
      data = JSON.parse(data);
    }
    dispatch(loadfav(data));
  };
};

//addTo cart
export const addToCartFunc = (data) => {
  return (dispatch) => {
    localStorage.setItem("food_cart", JSON.stringify(data));
    dispatch(addCart(data));
  };
};

//removeFrom cart
export const removeFromCartFunc = (data) => {
  return (dispatch) => {
    localStorage.setItem("food_cart", JSON.stringify(data));
    dispatch(removeCart(data));
  };
};
//addTo cart
export const addToFavFunc = (data) => {
  return (dispatch) => {
    localStorage.setItem("food_favorites", JSON.stringify(data));
    dispatch(addFav(data));
  };
};

//removeFrom cart
export const removeFromFavFunc = (data) => {
  return (dispatch) => {
    localStorage.setItem("food_favorites", JSON.stringify(data));
    dispatch(removeFav(data));
  };
};
//removeFrom cart
export const increaseCartFavFunc = (data) => {
  return (dispatch) => {
    localStorage.setItem("food_cart", JSON.stringify(data));
    dispatch(increaseCart(data));
  };
};

//removeFrom cart
export const decreaseCartFunc = (data) => {
  return (dispatch) => {
    localStorage.setItem("food_cart", JSON.stringify(data));
    dispatch(decreaseCart(data));
  };
};
//clear cart
export const clearCartFunc = (data) => {
  return (dispatch) => {
    localStorage.setItem("food_cart", JSON.stringify(data));
    dispatch(clearCart(data));
  };
};

//clear cart
export const showCartFunc = (data) => {
  return (dispatch) => {
    dispatch(showCart(data));
  };
};
