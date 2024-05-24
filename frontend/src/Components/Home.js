import React, { useEffect } from "react";
import Hero from "./ReuseComponent/Hero";
import Contact from "./ReuseComponent/Contact";
import "./css/Home.css";
import AboutUs from "./ReuseComponent/AboutUs";
import Count from "./ReuseComponent/Count/Count";
import Team from "./Team";
import ProjectHome from "./ReuseComponent/Project/ProjectHome";
import WhatWeDo from "./ReuseComponent/WhatWeDo";
import Courses from "./ReuseComponent/Courses";
import Rating from "./ReuseComponent/Rating";
import Notes from "./ReuseComponent/Notes";
import { Capacitor } from "@capacitor/core";
import DownloadApp from "./ReuseComponent/DownloadApp";
import Footer from "./ReuseComponent/Footer";
function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div>
        <Hero />
      </div>
      {!Capacitor.isNativePlatform() && (
        <div className="MarginTopNegative">
          <WhatWeDo />
        </div>
      )}
      <Count />
      <div className="MarginTopNegative">
        <Courses />
      </div>
      <div className="MarginTopNegative">
        <Notes />
      </div>
      <div className="MarginTopNegative">
        <ProjectHome />
      </div>
      <div className="MarginTopNegative">
        <AboutUs />
      </div>
      <Rating show={true} />
      {/* onle in web */}
      {/* {!Capacitor.isNativePlatform() && <DownloadApp />} */}
      <div className="MarginTopNegative">
        <Team />
      </div>
      <div className="MarginTopNegative">
        <Contact />
      </div>
      {/* not in web */}
      {Capacitor.isNativePlatform() && <Footer />}
    </div>
  );
}

export default Home;
