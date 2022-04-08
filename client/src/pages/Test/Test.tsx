import * as React from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";

import { addProductToBasket, decrementProductInBasket, deleteProductFromBasket } from "../../State/Redux/action";

const Test = () => {
  const dispatch = useDispatch();
  const basketItem = useSelector((state: RootStateOrAny) => state.basket);
  console.log(basketItem);

  const product = "623e0d0e4a8b7f02bc6dfbc5";

  const handler = () => {
    dispatch(deleteProductFromBasket(product));
  };

  return (
    <div>
      {/* <Basket value={3} /> */}
      <button onClick={handler}>
        <h1>Click me</h1>
      </button>
    </div>
  );
};

export default Test;
