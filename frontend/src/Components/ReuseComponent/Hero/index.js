import React from "react";
import "../../css/Hero.css";
import { heroStrings } from "../../../Strings/Strings";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div>
      <section
        id="hero"
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <div className="container text-center text-md-left" data-aos="fade-up">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: false }}
          >
            {heroStrings.title} <br className="mobile-show" />
            <span>{heroStrings.spanText}</span>
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: false }}
          >
            {heroStrings.subTitle}
          </motion.h2>
        </div>
      </section>
    </div>
  );
}

export default Hero;
