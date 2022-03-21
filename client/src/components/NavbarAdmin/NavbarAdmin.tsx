import { Button, Paper } from "@mui/material";
import "./NavbarAdmin.scss";

const NavbarAdmin = () => {
  return (
    <div className="navbar-admin">
      <div className="container navbar-admin__main">
        <Paper className="navbar-admin__main--paper" elevation={8}>
          <Button >Primary</Button>
        </Paper>
      </div>
    </div>
  );
};

export default NavbarAdmin;
