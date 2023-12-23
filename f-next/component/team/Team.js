import React from "react";
import "./Team.css";

function Team() {

  return (
    <div style={{ marginTop: "60px" }}>
      <section id="team" className="team">
        <div className="container">
          <div className="section-title">
            <h2>Team</h2>
          </div>

          <div className="row" style={{ justifyContent: "space-evenly" }}>
            <div className="col-lg-4 col-md-6 d-flex align-items-center ">
              <div className="member">
                <img src="/avantika.jpg" alt="" loading="lazy" />
                <h4>Avantika Shrivastava</h4>
                <span>Product Manager</span>

                <div className="social">
                  <a
                    href="https://instagram.com/avantika_shrivastava"
                    className="instagram"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/avantika-shrivastava-b67037252"
                    className="linkedin"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
              <div className="member">
                <img src="/prashant.png" alt="" loading="lazy" />
                <h4>Prashant Srivastav</h4>
                <span>Chief technology officer (CTO)</span>

                <div className="social">
                  <a href="https://instagram.com/sangam_prashant">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/sangamprashantsrivastav">
                    <i className="bi bi-linkedin"></i>
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
