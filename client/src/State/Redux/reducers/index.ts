import { combineReducers } from "redux";
import { basketReducer } from "./basketReducer";
import { shippingAddressReducer } from "./cartProducsReducer";
import { tokenReducer } from "./tokenReducer";

export const reducers = combineReducers({
  token: tokenReducer,
  basket: basketReducer,
  cartProduct: shippingAddressReducer,
});
