import { combineReducers } from "redux";
import { tokenReducer } from "./tokenReducer";

export const reducers = combineReducers({
  token: tokenReducer,
});
