import React from "react";
import "./Footer.css";
import Link from "next/link";
function Footer() {
  return (
    <div>
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 footer-contact">
                <h3>ACADEMIC QUERIES</h3>
                <p>
                  <strong>Email:</strong> queriesacademic@gmail.com
                  <br />
                </p>
              </div>

              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i className="fa fa-chevron-right"></i>{" "}
                    <Link href="/terms">Terms and Conditions</Link>
                  </li>
                  <li>
                    <i className="fa fa-chevron-right"></i>{" "}
                    <Link href="/privacy-policy">Privacy policy</Link>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li>
                    <i className="fa fa-chevron-right"></i>{" "}
                    <Link href="/about">About us</Link>
                  </li>
                  <li>
                    <i className="fa fa-chevron-right"></i>{" "}
                    <Link href="/services">Services</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="container text-gray d-md-flex py-4">
          <div className="me-md-auto text-center text-md-start">
            <div className="copyright">
              &copy; Copyright{" "}
              <strong>
                <span>
                  {" "}
                  <Link href="/testimonials" className="text-white">
                    ACADEMIC QUERIES.
                  </Link>{" "}
                </span>
              </strong>
              All Rights Reserved
            </div>
            <div className="credits text-gray">
              Designed by{" "}
              <a
                href="https://github.com/sangamprashant"
                target="_blank"
                rel="noreferrer"
                className="text-black"
              >
                Prashant srivastav
              </a>
            </div>
          </div>
          <div className="social-links text-center text-md-right pt-3 pt-md-0">
            <a href="https://instagram.com/sangam_prashant">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/sangamprashantsrivastav">
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
