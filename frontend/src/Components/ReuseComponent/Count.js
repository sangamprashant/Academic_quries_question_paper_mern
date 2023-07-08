import React from "react";
import "../css/Count.css";
function Count() {
  return (
    <div>
      <section id="counts" class="counts">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-6">
              <div class="count-box">
                <i class="fa fa-smile"></i>
                <span
                >85</span>
                <p>Happy Clients</p>
              </div>
            </div>

            <div class="col-lg-3 col-6">
              <div class="count-box">
                <i class="fa fa-file-text"></i>
                <span>86</span>
                <p>Projects</p>
              </div>
            </div>

            <div class="col-lg-3 col-6 mt-5 mt-lg-0">
              <div class="count-box">
                <i class="fa fa-headset"></i>
                <span
                >24/7</span>
                <p>Hours Of Support</p>
              </div>
            </div>

            <div class="col-lg-3 col-6 mt-5 mt-lg-0">
              <div class="count-box">
                <i class="fa fa-user"></i>
                <span
                >02</span>
                <p>Hard Workers</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Count;
