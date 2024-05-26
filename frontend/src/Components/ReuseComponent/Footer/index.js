import React from "react";
import "../../css/Footer.css";
import { Link } from "react-router-dom";
import { AppName, footerString } from "../../../Strings/Strings";
import { Capacitor } from "@capacitor/core";
function Footer() {
  return (
    <div>
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 footer-contact">
                <div className="d-flex">
                  <div className="text-center">
                    {/* only on web */}
                    {!Capacitor.isNativePlatform() && (
                      <img src="logo512.png" alt="" width={100} />
                    )}
                    <div className="text-start">
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
                  </div>
                </div>
              </div>

              {footerString.links.map((L, index) => {
                return (
                  <div className="col-lg-3 col-md-6 footer-links" key={index}>
                    <h4>{L.label}</h4>
                    <ul>
                      {L.data.map((D, i) => {
                        return (
                          <li key={i}>
                            <i className="fa fa-chevron-right"></i>{" "}
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

        <div className="container text-gray d-md-flex py-4">
          <div className="me-md-auto text-center text-md-start">
            <div className="copyright">
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
