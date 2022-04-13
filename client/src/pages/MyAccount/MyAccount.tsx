import React from "react";
import "./MyAccount.scss";

import ViewInArIcon from "@mui/icons-material/ViewInAr";
import DiscountIcon from '@mui/icons-material/Discount';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import HelpIcon from '@mui/icons-material/Help';
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";

export const MyAccount = () => {
  const navigate = useNavigate();
  const headers = [
    {
      icon: <ViewInArIcon />,
      header: "My Orders",
      link: ""
    },
    {
      icon: <DiscountIcon />,
      header: "My Discount Coupons",
      link: "mydiscount"
    },
    {
      icon: <PersonOutlineIcon />,
      header: "My User Info",
      link: "myuserinfo"
    },
    {
      icon: <HelpIcon />,
      header: "Help",
      link: "help"
    },
  ];
  return (
    <div className="myaccount">
      <h2 className="container">My Account</h2>
      <div className="myaccount__body container">
        <div className="myaccount__body--left">
          <List>
            {headers.map((item, index) => (
              <ListItem button key={index} onClick={()=> navigate(item.link)}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.header} />
              </ListItem>
            ))}
          </List>
        </div>
        <div className="myaccount__body--right">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
