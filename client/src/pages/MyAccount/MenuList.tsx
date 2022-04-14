import React from "react";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import DiscountIcon from "@mui/icons-material/Discount";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import HelpIcon from "@mui/icons-material/Help";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const MenuList = () => {
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
    <List>
      {headers.map((item, index) => (
        <ListItem button key={index} onClick={() => navigate(item.link)}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.header} />
        </ListItem>
      ))}
    </List>
  );
};
