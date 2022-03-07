import { ActionTypes } from "./ActionTypes";

const initialState = {
  fav: [],
  cart: [],
  showCart: true,
  loadFoods: false,
  foods: [],
  foodsError: false,
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
    case ActionTypes.SHOW_CART:
      return { ...state, showCart: action.payload };
    case ActionTypes.LOAD_FOODS_START:
      return { ...state, loadFoods: action.payload };
    case ActionTypes.LOAD_FOODS_SUCCESS:
      return { ...state, foods: action.payload, loadFoods:false };
    case ActionTypes.LOAD_FOODS_FAILED:
      return { ...state, foodsError: action.payload, loadFoods:false };
    default:
      return state;
  }
};

export default ProductReducer;
