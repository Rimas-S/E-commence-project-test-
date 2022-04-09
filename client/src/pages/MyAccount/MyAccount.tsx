import React from "react";
import ConstructionIcon from "@mui/icons-material/Construction";
import "./MyAccount.scss";

export const MyAccount = () => {
  return (
    <div className="myaccount">
      <div className="container flex">
        <ConstructionIcon fontSize="large" />
        <p>"My account" is under construction please wait</p>
      </div>
    </div>
  );
};
