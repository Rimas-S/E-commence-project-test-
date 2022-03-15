import { DELETE_TOKEN, SAVE_TOKEN, Token, TokenReducer } from "../../StateTypes/stateTypes";

const initialState = null;

export const tokenReducer = (
  state: Token | null = initialState,
  action: TokenReducer
) => {
    switch(action.type){
        case SAVE_TOKEN:
            return state = action.payload
        case DELETE_TOKEN:
            return state = null;
        default:
            return state
    }

};
