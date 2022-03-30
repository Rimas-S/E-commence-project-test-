import { Paper } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import "./NavbarAdmin.scss";

const NavbarAdmin = () => {
  const location: string = useLocation().pathname;

  return (
    <div className="navbar-admin">
      <div className="container navbar-admin__main">
        <Paper className="navbar-admin__main--paper" elevation={8}>
          <Link
            className={`navbar-admin__main--link${
              location.includes("productlist")
                ? " navbar-admin__main--highlight"
                : ""
            }`}
            to="/admin/productlist"
          >
            Product List
          </Link>
          <Link
            className={`navbar-admin__main--link${
              location.includes("userlist")
                ? " navbar-admin__main--highlight"
                : ""
            }`}
            to="/admin/userlist"
          >
            User List
          </Link>
        </Paper>
      </div>
    </div>
  );
};

export default NavbarAdmin;
