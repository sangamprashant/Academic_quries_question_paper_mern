"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

function NavBar() {
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
        <div className="d-flex align-items-center">
          <div
            className="logo me-auto"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Link href="/" onClick={OptionSelection}>
              <Image width="50" height="50" src="/logo.png" alt="" className="img-fluid" />
            </Link>
            <h1>
              <Link href="/" onClick={OptionSelection}>
                {" "}
                ACADEMIC QUERIES
              </Link>
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
                  className={`nav-linksignin`}
                  href="/about"
                  onClick={OptionSelection}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link scrollto"
                  href="/services"
                  onClick={OptionSelection}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  className={`nav-linksignin`}
                  href="/paper"
                  onClick={OptionSelection}
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link scrollto"
                  href="/projects"
                  onClick={OptionSelection}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  className={`nav-linksignin`}
                  href="/contact"
                  onClick={OptionSelection}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  className={`nav-linksignin`}
                  href="/user/upload/paper"
                  onClick={OptionSelection}
                >
                  Contribute
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link scrollto"
                  href="/privacy-policy"
                  onClick={OptionSelection}
                >
                  privacy policy
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link scrollto"
                  href="/terms"
                  onClick={OptionSelection}
                >
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link scrollto"
                  href="/visitor"
                  onClick={OptionSelection}
                >
                  Visitor
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link scrollto"
                  href="/testimonials"
                  onClick={OptionSelection}
                >
                  Testimonials
                </Link>
              </li>
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

export default NavBar;
