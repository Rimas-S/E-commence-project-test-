import React from "react";
import { useParams } from "react-router-dom";

export const OrderInfo = () => {
  const { status } = useParams();
  const { message } = useParams();
  const { orderid } = useParams();

  const orderInfo = (status: string | undefined) => {
    if (status === "success") {
      return (
        <div>
          <p>
            Order {orderid} {message}
          </p>
        </div>
      );
    } else if (status === "error") {
      return (
        <div>
          <p>{message}</p>
        </div>
      );
    }else{
        return (
            <div><p>ERROR 404</p></div>
        )
    }
  };

  return (
    <div>
      {orderInfo(status)}
    </div>
  );
};
