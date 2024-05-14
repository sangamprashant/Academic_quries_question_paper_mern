import React, { useEffect } from "react";
import "../../css/Paper.css";
import "../../css/ProjectsList.css";
import ProjectLanguages from "./ProjectLanguages";
import ProjectLeft from "./ProjectLeft";

function ProjectsList() {

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  return (
    <div style={{ marginTop: "70px" }}>
      <section id="portfolio" className="portfolio">
        <div className="container">
          <div className="section-title">
            <h2>Projects List</h2>
          </div>
          <div className="row">
            <div className="project-list-left">
              <ProjectLeft />
            </div>
            <div className="project-list-right">
              <h4>Languages</h4>
              <ProjectLanguages />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProjectsList;
