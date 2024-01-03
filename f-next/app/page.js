import {
  AboutUs,
  Contact,
  Count,
  Hero,
  Paper,
  Rating,
  Team,
  WhatWeDo,
} from "@/component";
import CountUserPost from "@/component/count/CountUserPost";
import ProjectHome from "@/component/project/ProjectHome";
import React from "react";

function Home() {
  return (
    <div>
       <Hero />
      <div className="MarginTopNegative">
        <WhatWeDo />
      </div>
      <div className="MarginTopNegative">
        <Count />
      </div>
      <div className="MarginTopNegative">
        <Paper />
      </div>
      <div className="MarginTopNegative">
        <ProjectHome />
      </div>
      <div className="MarginTopNegative">
        <AboutUs />
      </div>
      <div className="MarginTopNegative">
        <Rating />
      </div>
      <div className="MarginTopNegative">
        <Team />
      </div>
      <div className="MarginTopNegative">
        <Contact />
      </div>
      <CountUserPost/>
    </div>
  );
}

export default Home;
