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
            <Link className={`nav-link scrollto`} to="/admin">
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

  const handleScrollTo = (e) => {
    const target = document.querySelector(e.currentTarget.hash);
    if (target) {
      e.preventDefault();
      setMobileNavOpen(false);
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: "smooth",
      });
    }
  };
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
            <Link to="/">
              <img src={logo} alt="" class="img-fluid" />
            </Link>
            <h1>
              <Link to="/"> ACADEMIC QUERIES</Link>
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
                <Link className={`nav-linksignin`} to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="nav-link scrollto" to="/services">
                  Services
                </Link>
              </li>
              <li>
                <Link className={`nav-linksignin`} to="/paper">
                  Courses
                </Link>
              </li>
              <li>
                <Link className={`nav-linksignin`} to="/contact">
                  Contact
                </Link>
              </li>
              <li>
                <Link className={`nav-linksignin`} to="/user/upload/paper">
                  Contribute Paper
                </Link>
              </li>
              <li>
                <Link className="nav-link scrollto" to="/testimonials">
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

          <div class="header-social-links d-flex align-items-center">
            {/* Social media links */}
            <a
              href="https://instagram.com/avantika_shrivastava"
              class="instagram"
            >
              <i class="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/avantika-shrivastava-b67037252"
              class="linkedin"
            >
              <i class="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}
