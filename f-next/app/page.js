import {
  AboutUs,
  Contact,
  Count,
  Hero,
  Paper,
  Team,
  WhatWeDo,
} from "@/component";
import React from "react";

function Home() {
  return (
    <div>
      <Hero />
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
        <Team />
      </div>
      <div className="MarginTopNegative">
        <Count />
      </div>
      <div className="MarginTopNegative">
        <Contact />
      </div>
    </div>
  );
}

export default Home;
