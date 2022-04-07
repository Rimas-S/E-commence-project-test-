import "./Navbar.scss";
import ThemeSwitch from "./ThemeSwitch/ThemeSwitch";
import { Link, useNavigate } from "react-router-dom";
import SignIn from "./Buttons/SignIn";
import SignUp from "./Buttons/SignUp";
import UserMenu from "../UserMenu/UserMenu";
import { useEffect, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { Token } from "../../State/StateTypes/stateTypes";
import jwt_decode from "jwt-decode";
import { deleteToken } from "../../State/Redux/action";
import Basket from "../Basket/Basket";

const Navbar = () => {
  const navbar = ["Home", "Shop", "Contact", "Test"];
  const navigate = useNavigate();

  const [isLoggedIn, setisLoggedIn] = useState("false");

  const dispatch = useDispatch();
  const checkToken: Token | null = useSelector(
    (state: RootStateOrAny) => state.token
  );

  const basketItem = useSelector((state: RootStateOrAny) => state.basket);

  useEffect(() => {
    if (checkToken === null) {
      setisLoggedIn("false");
    } else {
      const token = checkToken.token;
      const decoded: any = jwt_decode(token);
      const date = new Date(decoded.exp * 1000) > new Date();
      if (date) {
        setisLoggedIn("true");
      } else {
        setisLoggedIn("false");
        dispatch(deleteToken());
      }
    }
  }, [checkToken, dispatch]);

  function Greeting(props: any) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn === "true") {
      return <UserMenu />;
    }
    return (
      <>
        <SignIn />
        <SignUp />
      </>
    );
  }

  return (
    <header className="navbar">
      <div className="navbar__header container flex">
        <img
          onClick={() => navigate("/")}
          className="navbar__logo"
          src="/img/logo.png"
          alt="logo"
        />
        <div className="navbar__header--btn flex">
          <Greeting isLoggedIn={isLoggedIn} />
          <Basket value={basketItem.length} onClick={() => navigate("/basket")} />
          <ThemeSwitch />
        </div>
      </div>
      <div className="navbar__menu">
        <ul className="container flex">
          {navbar.map((item: string) => (
            <li key={item} className="navbar__menu--item">
              <Link
                to={item === "Home" ? "/" : item.replace(" ", "")}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
