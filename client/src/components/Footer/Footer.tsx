import React from "react";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./Footer.scss";
import { Copyright } from "../../services/services";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container grid4gap1">
        <div className="footer__logo">
          <h1>ecommerceeasy</h1>
        </div>
        <div className="footer__corporate grid1gap1">
          <h3>Corporate</h3>
          <Link className="link" to={"aboutus"}>
            About Us
          </Link>
          <Link className="link" to={"contact"}>
            Help & Contact
          </Link>
          <Link className="link" to={"datapreferences"}>
            Data Preferences
          </Link>
        </div>
        <div className="footer__secure-shopping">
          <h3>Secure Shopping</h3>
        </div>
        <div className="footer__social-media">
          <h3>Social Media</h3>
          <IconButton
            href="https://www.linkedin.com/in/samir-aliyev-006955194/"
            target="_blank"
          >
            <LinkedInIcon className="icon linkedin"/>
          </IconButton>
          <IconButton
            href="https://www.facebook.com/profile.php?id=100000925701216"
            target="_blank"
          >
            <FacebookIcon className="icon facebook"/>
          </IconButton>
          <IconButton href="https://github.com/Rimas-S" target="_blank">
            <GitHubIcon className="icon github"/>
          </IconButton>
        </div>
      </div>
      <Copyright sx={{ mt: 4, mb: 1, color: "var(--headerFontColor)" }} />
    </footer>
  );
};

export default Footer;
