import React from "react";
import "./WhatWeDo.css";
import Link from "next/link";

function WhatWeDo() {
  return (
    <div style={{ marginTop: "70px" }}>
      <section id="what-we-do" className="what-we-do">
        <div className="container">
          <div className="section-title text-center">
            <h2 className="">What We Do</h2>
            <p>"Kindly grant us the opportunity to elucidate our endeavors."</p>
          </div>

          <div className="row  justify-content-around">
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
              <div className="icon-box">
                <div className="icon">
                  <i className="fa fa-clock"></i>
                </div>
                <h4>
                  <a href="">24/7 Available</a>
                </h4>
                <p>
                  Around-the-clock availability for all your needs. With our
                  24/7 support, you can count on us day or night, ensuring
                  prompt assistance and reliable service at any hour.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
              <div className="icon-box">
                <div className="icon">
                  <i className="fa fa-file"></i>
                </div>
                <h4>
                  <a href="">Question Paper</a>
                </h4>
                <p>Embrace the Questions, Always Open, Always Here for You</p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0"
              
            >
            <Link href="/user/upload/paper">

              <div className="icon-box">
                <div className="icon">
                  <i className="fa fa-upload"></i>
                </div>
                <h4>
                  <a>Contribute Here</a>
                </h4>
                <p style={{ color: "black" }}>
                  Your contributions fuel our success. Join us and be part of a
                  community that values your input.
                </p>
              </div>
            </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WhatWeDo;
