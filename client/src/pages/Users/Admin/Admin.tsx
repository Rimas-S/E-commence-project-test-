
import { Outlet } from "react-router-dom";
import NavbarAdmin from "../../../components/NavbarAdmin/NavbarAdmin";
import "./Admin.scss";

const Admin = () => {

  return (
    <>
      <div className="admin">
        <NavbarAdmin />
        <div className="outlet">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Admin;
