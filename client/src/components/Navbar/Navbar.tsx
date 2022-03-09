import "./Navbar.scss";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navbar = ["Home", "Shop", "Collection", "Blog", "Contact", "Test"];

  return (
    <header className="navbar__fixed">
      <div className="container navbar flex">
        <img className="navbar__logo" src="img/logo.png" alt="logo" />

        <ul className="navbar__menu flex">
          {navbar.map((item: string) => (
            <li key={item} className="navbar__menu--item">
              <Link
                to={item === "Home" ? "/" : item}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
        <ThemeSwitch />
      </div>
    </header>
  );
};

export default Navbar;
