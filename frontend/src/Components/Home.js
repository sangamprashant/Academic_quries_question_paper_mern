import React from "react";
import Hero from "./ReuseComponent/Hero";
import Contact from "./ReuseComponent/Contact";
import "./css/Home.css";
import WhatWeDo from "./ReuseComponent/WhatWeDo";
import AboutUs from "./ReuseComponent/AboutUs";
import Paper from "./ReuseComponent/Paper";
import Count from "./ReuseComponent/Count";
import Footer from "./ReuseComponent/Footer";
import Team from "./Team";
import ProjectHome from "./ReuseComponent/ProjectHome";
function Home() {
  return (
    <div>
      <div>
        <Hero />
      </div>
      <div className="MarginTopNegative">
        <WhatWeDo />
      </div>
      <div className="MarginTopNegative">
        <Paper />
      </div>
      <div className="MarginTopNegative">
        <AboutUs />
      </div>
      <div className="MarginTopNegative">
        <ProjectHome />
      </div>
      <div className="MarginTopNegative">
        <Team />
      </div>
      <div>
        <Count />
      </div>
      <div className="MarginTopNegative">
        <Contact />
      </div>
    </div>
  );
}

export default Home;
