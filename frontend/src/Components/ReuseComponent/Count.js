import React from "react";
import "../css/Count.css";
function Count({count}) {
  return (
    <div>
      <section id="counts" class="counts">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-6">
              <div class="count-box">
                <i class="fa fa-smile"></i>
                <span
                >938</span>
                <p>Happy Clients</p>
              </div>
            </div>

            <div class="col-lg-3 col-6">
              <div class="count-box">
                <i class="fa fa-file-text"></i>
                <span>{count}</span>
                <p>Papers</p>
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
                <p>Developers</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Count;
