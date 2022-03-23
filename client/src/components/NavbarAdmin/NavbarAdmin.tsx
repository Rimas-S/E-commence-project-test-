import { Paper } from "@mui/material";
import { Link } from "react-router-dom";
import "./NavbarAdmin.scss";

const NavbarAdmin = () => {
  return (
    <div className="navbar-admin">
      <div className="container navbar-admin__main">
        <Paper className="navbar-admin__main--paper" elevation={8}>
          <Link to="/admin/productlist">Product List</Link>
          <Link to="/admin/createproduct">Create Product</Link>
          <Link to="/admin/updateproduct">Update Product</Link>
        </Paper>
      </div>
    </div>
  );
};

export default NavbarAdmin;
