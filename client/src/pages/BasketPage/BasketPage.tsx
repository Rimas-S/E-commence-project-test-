import { Button, IconButton } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import PaymentIcon from "@mui/icons-material/Payment";
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
  const VAT = 0.2;
  const SHIPPING = 3.99;
  const FREESHIPPING = 0;

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
    return sum;
  };

  const myRound = (number: number) => {
    return Math.round((number + Number.EPSILON) * 100) / 100;
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
                          dispatch(decrementProductInBasket(product._id));
                        }}
                      >
                        <RemoveCircleIcon />
                      </IconButton>
                      {countItemInArray(products, product._id)}
                      <IconButton
                        disableRipple={true}
                        onClick={() => {
                          dispatch(addProductToBasket(product._id));
                        }}
                      >
                        <AddCircleIcon />
                      </IconButton>
                    </div>
                    <p>
                      <span>&#8364;</span>
                      {Math.round(
                        (countItemInArray(products, product._id) *
                          product.price +
                          Number.EPSILON) *
                          100
                      ) / 100}
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
            {data && data.length > 0 ? (
              <>
                <div className="basket-page__body--right_content-1">
                  <h3>ORDER SUMMARY</h3>
                  <div className="grid">
                    <p className="grid-item-1">Subtotal</p>
                    <p className="grid-item-2">
                      <span>&#8364;</span>
                      {myRound(totalSum() / (1 + VAT))}
                    </p>
                    <p className="grid-item-1">VAT (20%)</p>
                    <p className="grid-item-2">
                      <span>&#8364;</span>
                      {myRound(totalSum() - totalSum() / (1 + VAT))}
                    </p>
                    <p className="grid-item-1">Shipping</p>
                    <p className="grid-item-2">
                      <span>&#8364;</span>
                      {SHIPPING}
                    </p>
                    <p className="grid-item-1">Free Shipping</p>
                    <p className="grid-item-2">
                      <span>&#8364;</span>
                      {FREESHIPPING}
                    </p>
                  </div>
                  <hr
                    style={{
                      width: "100%",
                      margin: "0.7rem 0",
                    }}
                  />
                  <div className="grid">
                    <h3 className="grid-item-1">Total</h3>
                    <h3 className="grid-item-2">
                      <span>&#8364;</span>
                      {myRound(totalSum() + SHIPPING + FREESHIPPING)}
                    </h3>
                  </div>
                  <Button
                    className="grid-item-btn"
                    fullWidth
                    variant="contained"
                  >
                    Checkout
                  </Button>
                </div>
                <div className="basket-page__body--right_content-2">
                  <div className="banner">
                    <h4>Get 30&#8364; over 80&#8364; with CODE</h4>
                    <h3 className="banner__code">WELCOME30</h3>
                    <p>only valid on two orders</p>
                  </div>
                  <div className="discount-code"></div>
                </div>
              </>
            ) : (
              <></>
            )}
            <div className="basket-page__body--right_content-3">
              <p>
                <PaymentIcon className="a" /> Payment Metods
              </p>
              <img src="/img/payment.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
