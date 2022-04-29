import {
  AddProductToBasket,
  ADD_PRODUCT,
  ClearBasket,
  CLEAR_BASKET,
  DecrementProductInBasket,
  DECREMENT_PRODUCT,
  DeleteProductFromBasket,
  DELETE_PRODUCT,
} from "../../StateTypes/stateTypes";

const initialState: string[] = [];

function decrement(arr: string[], product: string) {
  let index = arr.indexOf(product);

  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}

function deleteItemFromArray(arr: string[], product: string) {
  let i = 0;
  while (i < arr.length) {
    if (arr[i] === product) {
      arr.splice(i, 1);
    } else {
      ++i;
    }
  }
  return arr;
}

export const basketReducer = (
  state: string[] = initialState,
  action:
    | AddProductToBasket
    | DecrementProductInBasket
    | DeleteProductFromBasket
    | ClearBasket
) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return [...state, action.payload];
    case DECREMENT_PRODUCT:
      return [...decrement(state, action.payload)];
    case DELETE_PRODUCT:
      return [...deleteItemFromArray(state, action.payload)];
    case CLEAR_BASKET:
      return initialState;
    default:
      return state;
  }
};
