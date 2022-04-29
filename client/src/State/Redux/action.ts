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
  SaveShippingAddress,
  SAVE_SHIPPING_ADDRESS,
  ShippingAddress,
  CartProducts,
  SaveCartProducts,
  SAVE_CART_PRODUCTS,
  ClearBasket,
  CLEAR_BASKET,
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
  };
}

export function decrementProductInBasket(
  product: string
): DecrementProductInBasket {
  return {
    type: DECREMENT_PRODUCT,
    payload: product,
  };
}

export function deleteProductFromBasket(
  product: string
): DeleteProductFromBasket {
  return {
    type: DELETE_PRODUCT,
    payload: product,
  };
}

export function clearBasket(): ClearBasket {
  return {
    type: CLEAR_BASKET,
  };
}

export function saveShippingAddress(
  shippingAddress: ShippingAddress
): SaveShippingAddress {
  return {
    type: SAVE_SHIPPING_ADDRESS,
    payload: shippingAddress,
  };
}

export function saveCartProducts(cartProducts: CartProducts): SaveCartProducts {
  return {
    type: SAVE_CART_PRODUCTS,
    payload: cartProducts,
  };
}
