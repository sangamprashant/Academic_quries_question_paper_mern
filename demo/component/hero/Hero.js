import React from "react";
import "./Hero.css";
function Hero() {
  return (
    <div>
      <section
        id="hero"
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <div className="container text-center text-md-left">
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