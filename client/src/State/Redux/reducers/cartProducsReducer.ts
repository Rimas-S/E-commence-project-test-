import {
  CartProducts,
  SaveCartProducts,
  SAVE_CART_PRODUCTS,
} from "../../StateTypes/stateTypes";

const initialState = {
  userId: "",
  products: [{
    id: "",
    quantity: 0,
    price: 0,
  }],
  subTotal: 0,
  vat: 0,
  shipping: 0,
  freeShipping: 0,
  totalAmound: 0,
};

export const shippingAddressReducer = (
  state: CartProducts = initialState,
  action: SaveCartProducts
) => {
  switch (action.type) {
    case SAVE_CART_PRODUCTS:
      return (state = action.payload);
    default:
      return state;
  }
};
