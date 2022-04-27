import {
  ResetCheckoutStep,
  RESET_STEP,
  SetCheckoutStep,
  SET_STEP,
} from "../../StateTypes/stateTypes";

const initialState = 0;

export const checkoutReducer = (
  state: number = initialState,
  action: SetCheckoutStep | ResetCheckoutStep
) => {
  switch (action.type) {
    case SET_STEP:
      return (state = action.payload);
    case RESET_STEP:
      return (state = 0);
    default:
      return state;
  }
};
