import { ActionTypes } from "./ActionTypes";

const initialState = {
  fav: [],
  cart: [],
};

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.LOAD_CART:
      return { ...state, cart: action.payload };
    case ActionTypes.LOAD_FAV:
      return { ...state, fav: action.payload };
    case ActionTypes.ADD_CART:
      return { ...state, cart: action.payload };
    case ActionTypes.ADD_FAV:
      return { ...state, fav: action.payload };
    case ActionTypes.REMOVE_CART:
      return { ...state, cart: action.payload };
    case ActionTypes.REMOVE_FAV:
      return { ...state, fav: action.payload };
    case ActionTypes.CLEAR_CART:
      return { ...state, cart: action.payload };
    case ActionTypes.CLEAR_FAV:
      return { ...state, fav: action.payload };
    case ActionTypes.INCREASE_CART:
      return { ...state, cart: action.payload };
    case ActionTypes.DECREASE_CART:
      return { ...state, cart: action.payload };
    default:
      return state;
  }
};

export default ProductReducer;
