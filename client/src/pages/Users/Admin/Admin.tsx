import React, { useEffect } from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import NavbarAdmin from "../../../components/NavbarAdmin/NavbarAdmin";
import "./Admin.scss";

const Admin = () => {
  const [role, setRole] = React.useState("user");

  const token = useSelector((state: RootStateOrAny) => state.token);
  useEffect(() => {
    if (token) {
      setRole(token.role);
    }
  }, [token]);

  return (
    <>
      {token && role === "admin" ? (
        <>
          <NavbarAdmin />
          <Outlet />
        </>
      ) : (
        <div><p>You are not Admin!</p><Link to="/signin">Log in</Link></div>
      )}
    </>
  );
};

export default Admin;
