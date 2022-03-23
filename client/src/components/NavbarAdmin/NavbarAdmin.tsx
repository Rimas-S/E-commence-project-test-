import { Paper } from "@mui/material";
import { Link } from "react-router-dom";
import "./NavbarAdmin.scss";

const NavbarAdmin = () => {
  return (
    <div className="navbar-admin">
      <div className="container navbar-admin__main">
        <Paper className="navbar-admin__main--paper" elevation={8}>
          <Link className="navbar-admin__main--link" to="/admin/productlist">Product List</Link>
          <Link className="navbar-admin__main--link" to="/admin/createproduct">Create Product</Link>
        </Paper>
      </div>
    </div>
  );
};

export default NavbarAdmin;
