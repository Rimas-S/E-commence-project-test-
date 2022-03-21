import React, { useEffect } from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import CreateProduct from "../../../components/CreateProduct/CreateProduct";
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
      {role === "admin" ? (
        <>
          <NavbarAdmin />
          <CreateProduct />
        </>
      ) : (
        <div>You are not Admin!</div>
      )}
    </>
  );
};

export default Admin;
