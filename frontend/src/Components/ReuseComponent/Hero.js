import React from "react";
import "../css/Hero.css";
function Hero() {
  return (
    <div>
      <section
        id="hero"
        class="d-flex flex-column justify-content-center align-items-center"
      >
        <div class="container text-center text-md-left" data-aos="fade-up">
          <h1>
            Welcome to <br className="mobile-show"
            /><span >Academic Queries</span>
          </h1>
          <h2>
          EMPOWERING EDUACTION , ACADEMIC ASSISTENCE
          </h2>
        </div>
      </section>
    </div>
  );
}

export default Hero;
