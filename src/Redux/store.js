import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";
import ProductReducer from "./reducer";

const reducers = combineReducers({ ProductState: ProductReducer });

export const store = createStore(reducers,composeWithDevTools(applyMiddleware(logger,thunk)));


