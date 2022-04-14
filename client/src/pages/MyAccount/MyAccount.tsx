import React from "react";
import "./MyAccount.scss";

import ViewInArIcon from "@mui/icons-material/ViewInAr";
import DiscountIcon from "@mui/icons-material/Discount";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import ChatIcon from "@mui/icons-material/Chat";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import HelpIcon from "@mui/icons-material/Help";
import {
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";

export const MyAccount = () => {
  const navigate = useNavigate();
  const headers = [
    {
      icon: <ViewInArIcon />,
      header: "My Orders",
      link: "",
    },
    {
      icon: <DiscountIcon />,
      header: "My Discount Coupons",
      link: "mydiscount",
    },
    {
      icon: <PersonOutlineIcon />,
      header: "My User Info",
      link: "myuserinfo",
    },
    {
      icon: <HelpIcon />,
      header: "Help",
      link: "help",
    },
  ];
  return (
    <div className="myaccount">
      <h2 className="myaccount__header container">My Account</h2>
      <div className="myaccount__body container">
        <div className="myaccount__body--left">
          <div className="myaccount__body--left-list">
            <List>
              {headers.map((item, index) => (
                <ListItem
                  button
                  key={index}
                  onClick={() => navigate(item.link)}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.header} />
                </ListItem>
              ))}
            </List>
          </div>
          <div className="myaccount__body--left-contact_info">
            <p>Our working hours:</p>
            <p>Mon-Fri: 07:00-21:00</p>
            <p>Sat-Sun: 08:00-21:00</p>
            <div className="grid1gap1">
              <Button
                color="secondary"
                variant="outlined"
                startIcon={<ChatIcon />}
              >
                Start chat
              </Button>
              <Button
                color="secondary"
                variant="outlined"
                startIcon={<HeadsetMicIcon />}
              >
                Call
              </Button>
            </div>
          </div>
        </div>
        <div className="myaccount__body--right">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
