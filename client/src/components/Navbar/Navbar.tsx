import "./Navbar.scss";
import ThemeSwitch from "./ThemeSwitch/ThemeSwitch";
import { Link } from "react-router-dom";
import SignIn from "./Buttons/SignIn";
import SignUp from "./Buttons/SignUp";

const Navbar = () => {
  const navbar = ["Home", "Shop", "Contact", "Test"];

  return (
    <header className="navbar">
      <div className="navbar__header container flex">
        <img className="navbar__logo" src="img/logo.png" alt="logo" />
        <div className="navbar__header--btn flex">
          <SignIn />
          <SignUp />
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
