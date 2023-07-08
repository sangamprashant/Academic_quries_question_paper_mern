import React from "react";
import "../css/AboutUs.css";
import pic from "../img/logo aq.png";
import Footer from "./Footer";
function AboutUs() {
  return (
    <div style={{ marginTop: "70px" }}>
      <section id="about" class="about">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <img src={pic} class="img-fluid" alt="" />
            </div>
            <div class="col-lg-6 pt-4 pt-lg-0">
              <h3>About Us</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul>
                <li>
                  <i class="fa fa-check-double"></i> Ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </li>
                <li>
                  <i class="fa fa-check-double"></i> Duis aute irure dolor in
                  reprehenderit in voluptate velit.
                </li>
              </ul>
              <div class="row icon-boxes">
                <div class="col-md-6">
                  <i class="fa fa-receipt"></i>
                  <h4>Corporis voluptates sit</h4>
                  <p>
                    Consequuntur sunt aut quasi enim aliquam quae harum pariatur
                    laboris nisi ut aliquip
                  </p>
                </div>
                <div class="col-md-6 mt-4 mt-md-0">
                  <i class="fa fa-cube"></i>
                  <h4>Ullamco laboris nisi</h4>
                  <p>
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
