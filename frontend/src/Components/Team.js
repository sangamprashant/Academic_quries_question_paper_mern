import React from "react";
import "./css/Team.css";
import Prashant from "./img/prashant.png";
import Avantika from "./img/avantika.jpg";

function Team() {
  return (
    <div style={{ marginTop: "60px" }}>
      <section id="team" class="team">
        <div class="container">
          <div class="section-title">
            <h2>Team</h2>
          </div>

          <div class="row" style={{ justifyContent: "space-evenly" }}>
            <div class="col-lg-4 col-md-6 d-flex align-items-center ">
              <div class="member">
                <img src={Avantika} alt="" />
                <h4>Avantika Shrivastava</h4>
                <span>Product Manager</span>

                <div class="social">
                  <a
                    href="https://instagram.com/avantika_shrivastava"
                    class="instagram"
                  >
                    <i class="fab fa-instagram"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/avantika-shrivastava-b67037252"
                    class="linkedin"
                  >
                    <i class="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
              <div class="member">
                <img src={Prashant} alt="" />
                <h4>Prashant Srivastav</h4>
                <span>Chief technology officer (CTO)</span>

                <div class="social">
                  <a href="https://instagram.com/sangam_prashant">
                    <i class="bi bi-instagram"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/prashant-srivastav-63b44b242">
                    <i class="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Team;
