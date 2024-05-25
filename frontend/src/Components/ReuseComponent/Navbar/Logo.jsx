import React from "react";
import logo from "../../img/logo.png";
import { Link } from "react-router-dom";
import { AppName } from "../../../Strings/Strings";

const Logo = ({ OptionSelection }) => {
  return (
    <div
      className="logo me-auto align-items-center"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <Link to="/" onClick={OptionSelection}>
        <img src={logo} alt="" className="img-fluid" />
      </Link>
      <h1>
        <Link to="/" onClick={OptionSelection} className="app-name fw-bold">
          {AppName}
        </Link>
      </h1>
    </div>
  );
};

export default Logo;
