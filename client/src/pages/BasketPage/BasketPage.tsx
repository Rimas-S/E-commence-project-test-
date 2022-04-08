import { Button, IconButton } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import React from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../config";
import { countItemInArray } from "../../services/services";
import "./BasketPage.scss";
import {
  addProductToBasket,
  decrementProductInBasket,
  deleteProductFromBasket,
} from "../../State/Redux/action";

export const BasketPage = () => {
  const dispatch = useDispatch();
  const [data, setData] = React.useState<any>(null);
  const products = useSelector((state: RootStateOrAny) => state.basket);
  const navigate = useNavigate();

  React.useEffect(() => {
    axiosInstance
      .patch(`/products/productbyids`, {
        productsIdsArray: products,
      })
      .then(function (response) {
        // handle success
        setData(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [products]);

  const totalSum = () => {
    let sum = 0;
    data.forEach((product: any) => {
      sum += product.price * countItemInArray(products, product._id);
    });
    return Math.round((sum + Number.EPSILON) * 100) / 100;
  };

  return (
    <div className="basket-page">
      <div className="container">
        <div className="basket-page__title">
          <h2>My Cart ({products.length})</h2>
        </div>
        <div className="basket-page__body">
          <div className="basket-page__body--left">
            <div className="basket-page__body--left-header basket-grid">
              <p>Item</p>
              <p>Quantity</p>
              <p>Total</p>
              <p>Act</p>
            </div>
            <div className="basket-page__body--left-content">
              {products.length === 0 ? (
                <div className="content-empty">
                  <h2>Cart is empty</h2>
                  <Button variant="contained" onClick={() => navigate("/shop")}>
                    Go to shopping
                  </Button>
                </div>
              ) : (
                <></>
              )}
              {data ? (
                data.map((product: any, index: number) => (
                  <div
                    key={index}
                    className="content-item underline basket-grid"
                  >
                    <div className="flex">
                      <img src={product.image[0]} alt="" />
                      <div>
                        <p>{product.name}</p>
                        <p>Size: {product.size}</p>
                      </div>
                    </div>
                    <div className="content-item__quantity-btn">
                      <IconButton
                        disableRipple={true}
                        onClick={() => {
                          dispatch(addProductToBasket(product._id));
                        }}
                      >
                        <AddCircleIcon />
                      </IconButton>
                      {countItemInArray(products, product._id)}
                      <IconButton
                        disableRipple={true}
                        onClick={() => {
                          dispatch(decrementProductInBasket(product._id));
                        }}
                      >
                        <RemoveCircleIcon />
                      </IconButton>
                    </div>
                    <p>
                      <span>&#8364;</span>
                      {countItemInArray(products, product._id) * product.price}
                    </p>
                    <div>
                      <IconButton
                        onClick={() => {
                          dispatch(deleteProductFromBasket(product._id));
                        }}
                      >
                        <DeleteForeverIcon className="icon" />
                      </IconButton>
                    </div>
                  </div>
                ))
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="basket-page__body--right">
            {data ? (
              <p>
                Total: <span>&#8364;</span>
                {totalSum()}
              </p>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
