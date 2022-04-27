import {
  SaveShippingAddress,
  SAVE_SHIPPING_ADDRESS,
  ShippingAddress,
} from "../../StateTypes/stateTypes";

const initialState = {
  firstName: "",
  lastName: "",
  addressLine1: "",
  addressLine2: "",
  city: "",
  region: "",
  postalCode: "",
  country: "",
};

export const shippingAddressReducer = (
    state: ShippingAddress = initialState,
    action: SaveShippingAddress
  ) => {
    switch (action.type) {
      case SAVE_SHIPPING_ADDRESS:
        return (state = action.payload);
      default:
        return state;
    }
  };