import React from "react";
import "../css/WhatWeDo.css";
import Footer from "./Footer";
import { Link } from "react-router-dom";
function WhatWeDo() {
  return (
    <div style={{ marginTop: "70px" }}>
      <section id="what-we-do" class="what-we-do">
        <div class="container">
          <div class="section-title">
            <h2>What We Do</h2>
            <p>"Kindly grant us the opportunity to elucidate our endeavors."</p>
          </div>

          <div class="row  justify-content-around">
            <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
              <div class="icon-box">
                <div class="icon">
                  <i class="fa fa-clock"></i>
                </div>
                <h4>
                  <a href="">24/7 Available</a>
                </h4>
                <p>Around-the-clock availability for all your needs. With our 24/7 support, you can count on us day or night, ensuring prompt assistance and reliable service at any hour.</p>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
              <div class="icon-box">
                <div class="icon">
                  <i class="fa fa-file"></i>
                </div>
                <h4>
                  <a href="">Question Paper</a>
                </h4>
                <p>
                  Embrace the Questions,
              
                  Always Open, Always Here for You
                </p>
              </div>
            </div>

            <Link
              class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0"
              to="/user/upload/paper"
            >
              <div class="icon-box">
                <div class="icon">
                  <i class="fa fa-upload"></i>
                </div>
                <h4>
                  <a>Contribute Here</a>
                </h4>
                <p style={{ color: "black" }}>Your contributions fuel our success. Join us and be part of a community that values your input.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WhatWeDo;
