import { AddProductToBasket, ADD_PRODUCT, BasketItem } from "../../StateTypes/stateTypes";

const initialState: BasketItem[] = [];

export const basketReducer = (
  state: BasketItem[] = initialState,
  action: AddProductToBasket
) => {
    switch(action.type){
        case ADD_PRODUCT:
            return [...state, action.payload]
        default:
            return state
    }
};
