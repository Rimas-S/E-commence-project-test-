export const SAVE_TOKEN = "SAVE_TOKEN";
export const DELETE_TOKEN = "DELETE_TOKEN";
export const DECREMENT_PRODUCT = "DECREMENT_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const CLEAR_BASKET = "CLEAR_BASKET";
export const SAVE_SHIPPING_ADDRESS = "SAVE_SHIPPING_ADDRESS";
export const SAVE_CART_PRODUCTS = "SAVE_CART_PRODUCTS";

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

export type ClearBasket = {
  type: typeof CLEAR_BASKET;
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

export type CartProducts = {
  userId: string | null;
  products: {
    id: string;
    quantity: number;
    price: number;
  }[];
  subTotal: number;
  vat: number;
  shipping: number;
  freeShipping: number;
  totalAmound: number;
};

export type SaveCartProducts = {
  type: typeof SAVE_CART_PRODUCTS;
  payload: CartProducts;
};

export type Order = {
  userId: string | null;
  products: {
    id: string;
    quantity: number;
    price: number;
  }[];
  subTotal: number;
  vat: number;
  shipping: number;
  freeShipping: number;
  totalAmound: number;
  shippingAddress: ShippingAddress;
};

export type FetchedOrder = Order & {
  _id: string;
  created_at: string;
};
