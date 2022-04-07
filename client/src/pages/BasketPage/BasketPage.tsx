import React from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import { axiosInstance } from "../../config";
import { countDuplicatesInArray } from "../../services/services";
import "./BasketPage.scss";

export const BasketPage = () => {
  const [data, setData] = React.useState(null);
  const products = useSelector((state: RootStateOrAny) => state.basket);
  console.log(products);

  const count = countDuplicatesInArray(products);
  console.log(count);

  React.useEffect(() => {
    console.log(products);
    axiosInstance
      .patch(`/products/productbyids`, {
        productsIdsArray: products,
      })
      .then(function (response) {
        // handle success
        console.log(response.data);

        setData(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [products]);

  console.log(data);

  return (
    <div className="basket-page">
      <div className="container">
        <div className="basket-page__title">Title</div>
        <div className="basket-page__body">
          <div className="basket-page__body--left">Left</div>
          <div className="basket-page__body--right">Right</div>
        </div>
      </div>
    </div>
  );
};
