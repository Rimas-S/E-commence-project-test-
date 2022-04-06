import React from "react";
import "./Basket.scss";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

type BasketProps = {
  value: number;
  onClick: React.MouseEventHandler<HTMLDivElement> | undefined;
};

const Basket = ({ value, onClick }: BasketProps) => {
  return (
    <div className="basket" onClick={onClick}>
      <button className="basket__count">{value}</button>
      <ShoppingCartOutlinedIcon className="icon" />
    </div>
  );
};

export default Basket;
