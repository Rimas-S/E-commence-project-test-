export const SAVE_TOKEN = "SAVE_TOKEN";
export const DELETE_TOKEN = "DELETE_TOKEN";

// Token State
export type Token = {
  role: string;
  token: string;
  userId: string;
};

export type SaveToken = {
  type: typeof SAVE_TOKEN;
  payload: Token;
};

export type DeleteToken = {
  type: typeof DELETE_TOKEN;
};

export type TokenReducer = SaveToken | DeleteToken;

// Basket Types
export const ADD_PRODUCT = "ADD_PRODUCT";

export type AddProductToBasket = {
  type: typeof ADD_PRODUCT;
  payload: string;
};