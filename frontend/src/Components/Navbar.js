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
                <a className="nav-link scrollto" href="#services">
                  Services
                </a>
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
                <a className="nav-link scrollto" href="#testimonials">
                  Testimonials
                </a>
              </li>
              <li className="dropdown">
                <a href="#">
                  <span>Drop Down</span> <i className="bi bi-chevron-down"></i>
                </a>
                <ul>
                  <li>
                    <a href="#">Drop Down 1</a>
                  </li>
                  <li className="dropdown">
                    <a href="#">
                      <span>Deep Drop Down</span>{" "}
                      <i className="bi bi-chevron-right"></i>
                    </a>
                    <ul>
                      <li>
                        <a href="#">Deep Drop Down 1</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 2</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 3</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 4</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 5</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Drop Down 2</a>
                  </li>
                  <li>
                    <a href="#">Drop Down 3</a>
                  </li>
                  <li>
                    <a href="#">Drop Down 4</a>
                  </li>
                </ul>
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
