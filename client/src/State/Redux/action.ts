import {
  AddProductToBasket,
  ADD_PRODUCT,
  DecrementProductInBasket,
  DECREMENT_PRODUCT,
  DeleteProductFromBasket,
  DeleteToken,
  DELETE_PRODUCT,
  DELETE_TOKEN,
  SaveToken,
  SAVE_TOKEN,
  Token,
} from "../StateTypes/stateTypes";

export function saveToken(token: Token): SaveToken {
  return {
    type: SAVE_TOKEN,
    payload: token,
  };
}

export function deleteToken(): DeleteToken {
  return {
    type: DELETE_TOKEN,
  };
}

// Basket actions
export function addProductToBasket(product: string): AddProductToBasket {
  return {
    type: ADD_PRODUCT,
    payload: product,
  }
}

export function decrementProductInBasket(product: string): DecrementProductInBasket {
  return {
    type: DECREMENT_PRODUCT,
    payload: product,
  }
}

export function deleteProductFromBasket(product: string): DeleteProductFromBasket {
  return {
    type: DELETE_PRODUCT,
    payload: product,
  }
}