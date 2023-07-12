import React from "react";
import "../css/Footer.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div>
      <footer id="footer">
        <div class="footer-top">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 col-md-6 footer-contact">
                <h3>ACADEMIC QUERIES</h3>
                <p>
                  <strong>Phone:</strong> +91 6387692665
                  <br />
                  <strong>Email:</strong> queriesacademic@gmail.com
                  <br />
                </p>
              </div>

              <div class="col-lg-2 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i class="fa fa-chevron-right"></i>{" "}
                    <Link to="/terms">Terms of service</Link>
                  </li>
                  <li>
                    <i class="fa fa-chevron-right"></i>{" "}
                    <Link to="/policy">Privacy policy</Link>
                  </li>
                </ul>
              </div>

              <div class="col-lg-3 col-md-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li>
                    <i class="fa fa-chevron-right"></i>{" "}
                    <Link to="/about">About us</Link>
                  </li>
                  <li>
                    <i class="fa fa-chevron-right"></i>{" "}
                    <Link to="/services">Services</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="container d-md-flex py-4">
          <div class="me-md-auto text-center text-md-start">
            <div class="copyright">
              &copy; Copyright{" "}
              <strong>
                <span>
                  {" "}
                  <Link to="/signin" style={{ color: "black" }}>
                    ACADEMIC QUERIES
                  </Link>{" "}
                </span>
              </strong>
              . All Rights Reserved
            </div>
            <div class="credits">
              Designed by <a href="/">Prashant srivastav</a>
            </div>
          </div>
          <div class="social-links text-center text-md-right pt-3 pt-md-0">
            <a href="https://instagram.com/sangam_prashant">
              <i class="bi bi-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/prashant-srivastav-63b44b242">
              <i class="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
