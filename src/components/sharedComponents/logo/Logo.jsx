import React from "react";
import logo from "assets/newpage.png";
import { LogoBox } from "./logoStyles";
import { Link } from "react-router-dom";

function Logo({ ...props }) {
  return (
    <LogoBox {...props}>
      <Link to="/">
        <img src={logo} alt="Newpage cleaning service logo" />
        <h2>
          New<span>Page</span>
        </h2>
      </Link>
    </LogoBox>
  );
}

export default Logo;
