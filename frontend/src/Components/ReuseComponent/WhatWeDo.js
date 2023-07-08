import React from "react";
import "../css/WhatWeDo.css";
import Footer from "./Footer";
function WhatWeDo() {
  return (
    <div style={{marginTop:'70px'}}>
      <section id="what-we-do" class="what-we-do">
        <div class="container">
          <div class="section-title">
            <h2>What We Do</h2>
            <p>Magnam dolores commodi suscipit consequatur ex aliquid</p>
          </div>

          <div class="row">
            <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
              <div class="icon-box">
                <div class="icon">
                  <i class="fa fa-clock"></i>
                </div>
                <h4>
                  <a href="">24/7 Avilable</a>
                </h4>
                <p>
                  Voluptatum deleniti atque corrupti quos dolores et quas
                  molestias excepturi
                </p>
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
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore
                </p>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
              <div class="icon-box">
                <div class="icon">
                  <i class="fa fa-upload"></i>
                </div>
                <h4>
                  <a href="">Your Contributions</a>
                </h4>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WhatWeDo;
