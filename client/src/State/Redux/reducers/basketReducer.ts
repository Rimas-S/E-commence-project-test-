import { AddProductToBasket, ADD_PRODUCT } from "../../StateTypes/stateTypes";

const initialState: string[] = [];

export const basketReducer = (
  state: string[] = initialState,
  action: AddProductToBasket
) => {
    switch(action.type){
        case ADD_PRODUCT:
            return [...state, action.payload]
        default:
            return state
    }
};
