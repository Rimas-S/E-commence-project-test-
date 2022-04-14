import React from "react";
import { UpdateComponent } from "../UpdateUser/UpdateComponent";
import "./MyUserInfo.scss";

export const MyUserInfo = () => {
  return (
    <div className="my-user-info grid1gap1">
      <h3>User Information</h3>
      <div className="my-user-info__content">
        <UpdateComponent md={6} />
      </div>
    </div>
  );
};
