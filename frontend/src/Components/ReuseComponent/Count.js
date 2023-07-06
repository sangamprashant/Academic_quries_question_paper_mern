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
                  data-purecounter-start="0"
                  data-purecounter-end="232"
                  data-purecounter-duration="1"
                  class="purecounter"
                ></span>
                <p>Happy Clients</p>
              </div>
            </div>

            <div class="col-lg-3 col-6">
              <div class="count-box">
                <i class="fa fa-file-text"></i>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="521"
                  data-purecounter-duration="1"
                  class="purecounter"
                ></span>
                <p>Projects</p>
              </div>
            </div>

            <div class="col-lg-3 col-6 mt-5 mt-lg-0">
              <div class="count-box">
                <i class="fa fa-headset"></i>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="1463"
                  data-purecounter-duration="1"
                  class="purecounter"
                ></span>
                <p>Hours Of Support</p>
              </div>
            </div>

            <div class="col-lg-3 col-6 mt-5 mt-lg-0">
              <div class="count-box">
                <i class="fa fa-user"></i>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="15"
                  data-purecounter-duration="1"
                  class="purecounter"
                ></span>
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
