import React, { useState } from "react";
import "./css/Navbar.css";
import logo from "./img/logo aq.png";
import { Link } from "react-router-dom";

export default function Navbar({ navActive }) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

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
  console.log(navActive);
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
              <Link to="/"> Academic quries</Link>
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
                <Link
                  className={`nav-link scrollto ${
                    navActive === "About" ? "active" : ""
                  }`}
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link className="nav-link scrollto" to="/services">
                  Services
                </Link>
              </li>
              <li>
                <Link
                  className={`nav-link scrollto ${
                    navActive === "Paper" ? "active" : ""
                  }`}
                  to="/paper"
                >
                  Papers
                </Link>
              </li>
              <li>
                <Link
                  className={`nav-link scrollto ${
                    navActive === "Contact" ? "active" : ""
                  }`}
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link className="nav-link scrollto" to="/testimonials">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  className={`nav-link scrollto ${
                    navActive === "Contact" ? "active" : ""
                  }`}
                  to="/upload"
                >
                  Upload
                </Link>
              </li>
              <li>
                <Link
                  className={`nav-link scrollto ${
                    navActive === "Contact" ? "active" : ""
                  }`}
                  to="/responses"
                >
                  Responses
                </Link>
              </li>
            </ul>
            <i
              style={{ color: "black" }}
              className="fa fa-list mobile-nav-toggle"
              onClick={handleMobileNavToggle}
            ></i>
          </nav>

          <div class="header-social-links d-flex align-items-center">
            {/* Social media links */}
            <a href="#" class="twitter">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="facebook">
              <i class="fab fa-facebook"></i>
            </a>
            <a href="#" class="instagram">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#" class="linkedin">
              <i class="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}
