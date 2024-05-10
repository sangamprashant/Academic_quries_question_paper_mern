import React, { useState } from "react";
import "./css/Navbar.css";
import logo from "./img/logo.png";
import { Link } from "react-router-dom";
import { AppName, menuItems } from "../Strings/Strings";

export default function Navbar() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const handleMobileNavToggle = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  const OptionSelection = () => {
    setMobileNavOpen(false);
  };

  return (
    <div>
      <header
        id="header"
        className={`d-flex align-items-center fixed-top`}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div className="d-flex align-items-center justify-content-between w-100 px-3">
          <div
            className="logo me-auto"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Link to="/" onClick={OptionSelection}>
              <img src={logo} alt="" className="img-fluid" />
            </Link>
            <h1>
              <Link to="/" onClick={OptionSelection}>
                {" "}
                {AppName}
              </Link>
            </h1>
          </div>
          {/* nav items */}
          <nav
            id="navbar"
            className={`navbar order-last order-lg-0 ${
              mobileNavOpen ? "navbar-mobile" : ""
            }`}
          >
            <ul>
              {/* Map over menu items */}
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link
                    className={`nav-linksignin`}
                    to={item.link}
                    onClick={OptionSelection}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            <i
              className={`fa fa-${
                mobileNavOpen ? "close text-white" : "list"
              } mobile-nav-toggle`}
              onClick={handleMobileNavToggle}
            ></i>
          </nav>
        </div>
      </header>
    </div>
  );
}
