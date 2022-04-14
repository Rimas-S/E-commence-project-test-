import React from "react";
import "./MyAccount.scss";

import { Outlet } from "react-router-dom";
import { MenuList } from "./MenuList";
import { Contact } from "./Contact";
import { MyAccountDrawer } from "./MyAccountDrawer";

export const MyAccount = () => {
  return (
    <div className="myaccount">
      <h2 className="myaccount__header container">My Account</h2>
      <div className="myaccount__body container">
        <div className="myaccount__body--left">
          <div className="myaccount__body--left-list">
            <MenuList />
          </div>
          <div className="myaccount__body--left-contact_info">
            <Contact />
          </div>
        </div>
        <div className="menu-icon">
          <MyAccountDrawer />
        </div>
        <div className="myaccount__body--right">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
