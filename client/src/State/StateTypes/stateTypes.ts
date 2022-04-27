export const SAVE_TOKEN = "SAVE_TOKEN";
export const DELETE_TOKEN = "DELETE_TOKEN";
export const DECREMENT_PRODUCT = "DECREMENT_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const SET_STEP = "SET_STEP";
export const RESET_STEP = "RESET_STEP";
export const SAVE_SHIPPING_ADDRESS = "SAVE_SHIPPING_ADDRESS";

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

export type DecrementProductInBasket = {
  type: typeof DECREMENT_PRODUCT;
  payload: string;
};

export type DeleteProductFromBasket = {
  type: typeof DELETE_PRODUCT;
  payload: string;
};

// Checkout Types
export type SetCheckoutStep = {
  type: typeof SET_STEP;
  payload: number;
};

export type ResetCheckoutStep = {
  type: typeof RESET_STEP;
};

export type ShippingAddress = {
  firstName: string;
  lastName: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  region: string;
  postalCode: string;
  country: string;
};

export type SaveShippingAddress = {
  type: typeof SAVE_SHIPPING_ADDRESS;
  payload: ShippingAddress;
};
