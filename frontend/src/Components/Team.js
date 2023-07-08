import React from 'react'
import "./css/Team.css"
import Footer from "./ReuseComponent/Footer";
function Team() {
  return (
    <div style={{marginTop:"60px"}}>
      <section id="team" class="team">
      <div class="container">

        <div class="section-title">
          <h2>Team</h2>
          <p>Meet Our Hardworking Team</p>
        </div>

        <div class="row" style={{justifyContent:"space-evenly"}}>
          

          <div class="col-lg-4 col-md-6 d-flex align-items-center " >
            <div class="member">
              <img src="assets/img/team/team-2.jpg" alt=""/>
              <h4>Avantika Shrivastava</h4>
              <span>Product Manager</span>
              <p>
                Repellat fugiat adipisci nemo illum nesciunt voluptas repellendus. In architecto rerum rerum temporibus
              </p>
              <div class="social">
                <a href=""><i class="bi bi-twitter"></i></a>
                <a href=""><i class="bi bi-facebook"></i></a>
                <a href=""><i class="bi bi-instagram"></i></a>
                <a href=""><i class="bi bi-linkedin"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div class="member">
              <img src="assets/img/team/team-3.jpg" alt=""/>
              <h4>Prashant Srivastav</h4>
              <span>CTO</span>
              <p>
                Voluptas necessitatibus occaecati quia. Earum totam consequuntur qui porro et laborum toro des clara
              </p>
              <div class="social">
                <a href=""><i class="bi bi-twitter"></i></a>
                <a href=""><i class="bi bi-facebook"></i></a>
                <a href=""><i class="bi bi-instagram"></i></a>
                <a href=""><i class="bi bi-linkedin"></i></a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
    </div>
  )
}

export default Team
