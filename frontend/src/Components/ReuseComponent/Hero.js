import React from "react";
import "../css/Hero.css";
import { heroStrings } from "../../Strings/Strings";

function Hero() {
  return (
    <div>
      <section
        id="hero"
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <div className="container text-center text-md-left" data-aos="fade-up">
          <h1>
            {heroStrings.title} <br className="mobile-show" />
            <span>{heroStrings.spanText}</span>
          </h1>
          <h2>{heroStrings.subTitle}</h2>
        </div>
      </section>
    </div>
  );
}

export default Hero;
