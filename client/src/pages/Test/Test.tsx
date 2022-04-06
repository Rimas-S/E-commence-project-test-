import * as React from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";

import Basket from "../../components/Basket/Basket";
import { addProductToBasket } from "../../State/Redux/action";

const Test = () => {
  const dispatch = useDispatch();
  const basketItem = useSelector((state: RootStateOrAny) => state.basket);
  console.log(basketItem);

  const product = {
    productId: "4562213997465",
    price: 25,
    quantity: 2
  }

  const handler = ()=> {
    dispatch(addProductToBasket(product))    
  }

  return (
    <div>
      {/* <Basket value={3} /> */}
      <button onClick={handler}><h1>Click me</h1></button>
    </div>
  );
};

export default Test;
