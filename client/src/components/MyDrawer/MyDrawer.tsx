import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LoginIcon from "@mui/icons-material/Login";
import MenuIcon from "@mui/icons-material/Menu";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import { useNavigate } from "react-router-dom";
import { Avatar, IconButton } from "@mui/material";
import Logout from "@mui/icons-material/Logout";
import Settings from "@mui/icons-material/Settings";
import PersonAdd from "@mui/icons-material/PersonAdd";
import { useDispatch } from "react-redux";
import { deleteToken } from "../../State/Redux/action";

export const MyDrawer = ({ isLoggedIn }: any) => {
  const [state, setState] = React.useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const handlerLogout = () => {
    dispatch(deleteToken());
    navigate("/");
  };

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState(open);
    };

  const list = () => (
    <Box
      sx={{ width: 300 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      {isLoggedIn === "true" ? (
        <List>
          <ListItem button onClick={() => navigate("/myaccount")}>
            <ListItemIcon>
              <Avatar />
            </ListItemIcon>
            <ListItemText primary="My account" />
          </ListItem>
          <ListItem button onClick={() => navigate("/admin/dashboard")}>
            <ListItemIcon>
              <Avatar sizes="" />
            </ListItemIcon>
            <ListItemText primary="Admin Dashboard" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <PersonAdd />
            </ListItemIcon>
            <ListItemText primary="Add another account" />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>

          <ListItem button onClick={() => handlerLogout()}>
            <ListItemIcon>
              <Logout />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      ) : (
        <List>
          <ListItem button onClick={() => navigate("/signin")}>
            <ListItemIcon>
              <LoginIcon />
            </ListItemIcon>
            <ListItemText primary="Sign In" />
          </ListItem>
          <ListItem button onClick={() => navigate("/signup")}>
            <ListItemIcon>
              <AppRegistrationIcon />
            </ListItemIcon>
            <ListItemText primary="Sign Up" />
          </ListItem>
        </List>
      )}
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <IconButton onClick={toggleDrawer(true)}>
          <MenuIcon sx={{ color: "#fff" }} fontSize="large" />
        </IconButton>
        <Drawer anchor="right" open={state} onClose={toggleDrawer(false)}>
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
};
