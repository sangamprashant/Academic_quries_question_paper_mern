import { Capacitor } from "@capacitor/core";
import PublicIcon from "@mui/icons-material/Public";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { menuItems } from "../Strings/Strings";
import Logo from "./ReuseComponent/Navbar/Logo";
import "./css/Navbar.css";

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
          <Logo OptionSelection={OptionSelection} />
          {/* nav items */}
          <nav
            id="navbar"
            className={`navbar order-last order-lg-0 ${
              mobileNavOpen ? "navbar-mobile" : ""
            }`}
          >
            {!Capacitor.isNativePlatform() ? (
              <ul>
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
            ) : (
              <ul>
                <div className="d-flex flex-column gap-3 h-100 ">
                  <Logo OptionSelection={OptionSelection} />
                  <div className="d-flex flex-column justify-content-between h-100">
                    <div>
                      {menuItems.map((item, index) => (
                        <li key={index} className="my-1">
                          <Link
                            className={`nav-linksignin shadow p-4 bg-light-subtle.bg-gradient justify-content-start gap-3`}
                            to={item.link}
                            onClick={OptionSelection}
                          >
                            {item.icon} {item.title}
                          </Link>
                        </li>
                      ))}
                    </div>
                    <div className="d-flex justify-content-end px-3">
                      <Link
                        to={process.env.REACT_APP_PUBLIC}
                        className=" bg-primary-subtle p-3 rounded-5 text-dark"
                      >
                        <PublicIcon />
                      </Link>
                    </div>
                  </div>
                </div>
              </ul>
            )}
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
