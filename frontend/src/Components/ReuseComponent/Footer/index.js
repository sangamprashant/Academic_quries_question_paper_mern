import React from "react";
import "../../css/Footer.css";
import { Link } from "react-router-dom";
import { AppName, footerString } from "../../../Strings/Strings";
function Footer() {
  return (
    <div>
      <footer id="footer">
        <div class="footer-top">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 col-md-6 footer-contact">
                <h3>{footerString.AppName}</h3>
                {footerString.contact.map((data, index) => {
                  return (
                    <p key={index}>
                      <strong>{data.label}:</strong> {data.value}
                      <br />
                    </p>
                  );
                })}
              </div>

              {footerString.links.map((L, index) => {
                return (
                  <div class="col-lg-3 col-md-6 footer-links" key={index}>
                    <h4>{L.label}</h4>
                    <ul>
                      {L.data.map((D, i) => {
                        return (
                          <li key={i}>
                            <i class="fa fa-chevron-right"></i>{" "}
                            <Link to={D.path}>{D.name}</Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div class="container text-gray d-md-flex py-4">
          <div class="me-md-auto text-center text-md-start">
            <div class="copyright">
              &copy; Copyright{" "}
              <strong>
                <span>
                  {" "}
                  <Link to="/testimonials" className="text-white">
                    {AppName}.
                  </Link>{" "}
                </span>
              </strong>
              All Rights Reserved
            </div>
            <div class="credits text-gray">
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
          <div class="social-links text-center text-md-right pt-3 pt-md-0">
            <a href="https://instagram.com/sangam_prashant">
              <i class="bi bi-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/sangamprashantsrivastav">
              <i class="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
