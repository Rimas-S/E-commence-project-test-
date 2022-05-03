import React, { useState } from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { axiosInstance } from "../../config";
import { FetchedOrder, Token } from "../../State/StateTypes/stateTypes";
import MuiLoader from "../MuiLoader/MuiLoader";
import "./MyOrders.scss";

export const MyOrders = () => {
  const token: Token | null = useSelector(
    (state: RootStateOrAny) => state.token
  );
  const [orders, setOrders] = useState<any>(null);

  React.useEffect(() => {
    axiosInstance
      .get(`/orders/${token?.userId}`, {
        headers: { Authorization: `Bearer ${token?.token}` },
      })
      .then(function (response) {
        setOrders(response.data);
      })
      .catch(function (error) {
        setOrders({ error: error.message });
        console.log(error);
      });
  }, [token?.token, token?.userId]);

  return (
    <div className="myorders">
      {orders === null ? (
        <div className="flex">
          <MuiLoader size={60} />
        </div>
      ) : orders.error ? (
        <p>{orders.error}</p>
      ) : (
        <div>
          {orders.length === 0 ? (
            "You do not have orders"
          ) : (
            <div className="myorders__list">
              {orders.map((order: FetchedOrder, index: number) => (
                <div className="myorders__list--product" key={index}>
                  <h3>Order ID: {order._id}</h3>
                  <p className="myorders__list--product--time">
                    {new Date(order.created_at).toDateString()}{" "}
                    {new Date(order.created_at).toTimeString()}
                  </p>
                  <table>
                    <thead>
                      <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                      </tr>
                    </thead>
                    {order.products.map((product: any, index: number) => (
                      <tbody key={index}>
                        <tr>
                          <td className="flex">
                            <Link to={`/productdetail/${product.id._id}`}>
                              <img src={product.id.image[0]} alt="" />
                            </Link>
                          </td>
                          <td>
                            <Link to={`/productdetail/${product.id._id}`}>
                              {product.id.name}{" "}
                            </Link>
                          </td>
                          <td>{product.quantity}</td>
                          <td>{product.price}</td>
                        </tr>
                      </tbody>
                    ))}
                  </table>
                  {/* Test */}
                  <div className="myorders__list--product--cost">
                    <p>Subtotal: {order.subTotal}</p>
                    <p>VAT: {order.vat}</p>
                    <p>Shipping cost: {order.shipping}</p>
                    <p>Shipping discount: {order.freeShipping}</p>
                    <h4>Total: {order.totalAmound}</h4>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
