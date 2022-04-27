import { combineReducers } from "redux";
import { basketReducer } from "./basketReducer";
import { checkoutReducer } from "./checkoutReducer";
import { tokenReducer } from "./tokenReducer";

export const reducers = combineReducers({
  token: tokenReducer,
  basket: basketReducer,
  checkout: checkoutReducer,
});
