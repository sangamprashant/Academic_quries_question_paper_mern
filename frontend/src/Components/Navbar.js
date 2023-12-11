import React, { useState } from "react";
import "./css/Navbar.css";
import logo from "./img/logo.png";
import { Link } from "react-router-dom";

export default function Navbar({ login }) {
  const loggeduser = JSON.parse(localStorage.getItem("user"));

  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const AdminPart = () => {
    const token = localStorage.getItem("jwt");
    if (login || token) {
      return [
        <>
          <li>
            <Link className={`nav-link scrollto`} to="/admin" onClick={OptionSelection}>
              Admin
            </Link>
          </li>
        </>,
      ];
    }
  };

  const handleMobileNavToggle = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  const OptionSelection = () => {
    setMobileNavOpen(false)
  }

  return (
    <div>
      <header
        id="header"
        class={` d-flex align-items-center fixed-top`}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div class=" d-flex align-items-center">
          <div
            class="logo me-auto"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Link to="/" onClick={OptionSelection}>
              <img src={logo} alt="" class="img-fluid" />
            </Link>
            <h1>
              <Link to="/" onClick={OptionSelection}> ACADEMIC QUERIES</Link>
            </h1>
          </div>

          <nav
            id="navbar"
            className={`navbar order-last order-lg-0 ${
              mobileNavOpen ? "navbar-mobile" : ""
            }`}
          >
            <ul>
              {/* Menu items */}
              <li>
                <Link className={`nav-linksignin`} to="/about" onClick={OptionSelection}>
                  About
                </Link>
              </li>
              <li>
                <Link className="nav-link scrollto" to="/services" onClick={OptionSelection}>
                  Services
                </Link>
              </li>
              <li>
                <Link className={`nav-linksignin`} to="/paper" onClick={OptionSelection}>
                  Courses
                </Link>
              </li>
              <li>
                <Link className="nav-link scrollto" to="/projects" onClick={OptionSelection}>
                  Projects
                </Link>
              </li>
              <li>
                <Link className={`nav-linksignin`} to="/contact" onClick={OptionSelection}>
                  Contact
                </Link>
              </li>
              <li>
                <Link className={`nav-linksignin`} to="/user/upload/paper" onClick={OptionSelection}>
                  Contribute
                </Link>
              </li>
              <li>
                <Link className="nav-link scrollto" to="/policy" onClick={OptionSelection}>
                  Policy
                </Link>
              </li>
              <li>
                <Link className="nav-link scrollto" to="/terms" onClick={OptionSelection}>
                Terms
                </Link>
              </li>
              <li>
                <Link className="nav-link scrollto" to="/testimonials" onClick={OptionSelection}>
                  Testimonials
                </Link>
              </li>
              {AdminPart()}
            </ul>
            <i
              style={{ color: "black" }}
              className="fa fa-list mobile-nav-toggle"
              onClick={handleMobileNavToggle}
            ></i>
          </nav>

        </div>
      </header>
    </div>
  );
}
