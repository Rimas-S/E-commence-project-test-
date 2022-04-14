import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { Divider, IconButton } from "@mui/material";
import { MenuList } from "./MenuList";
import { Contact } from "./Contact";

export const MyAccountDrawer = () => {
  const [state, setState] = React.useState(false);

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
      <MenuList />
      <Divider />
      <div style={{textAlign: "center", padding: "1rem"}}>
        <Contact />
      </div>
    </Box>
  );

  return (
    <React.Fragment>
      <IconButton onClick={toggleDrawer(true)}>
        <MenuOpenIcon sx={{ color: "#000" }} fontSize="large" />
      </IconButton>
      <Drawer anchor="left" open={state} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </React.Fragment>
  );
};
