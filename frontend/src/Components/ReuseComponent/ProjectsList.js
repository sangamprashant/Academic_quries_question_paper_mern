import React, { useEffect, useState } from "react";
import "../css/Paper.css";
import { Link } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import "../css/ProjectsList.css";
import ProjectLanguages from "./ProjectLanguages";

function ProjectsList() {
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    fetch("http://localhost:5000/api/get/project")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data.map((project) => ({
          ...project,
          createdAt: new Date(project.createdAt).toLocaleDateString(), // Format the date
        })));
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch PDF files:", error);
        setIsLoading(false); // Turn off loading state in case of an error
      });
  };

  return (
    <div style={{ marginTop: "70px" }}>
      <section id="portfolio" className="portfolio">
        <div className="container">
          <div className="section-title">
            <h2>Projects List</h2>
          </div>
          <div className="row">
            <div className="project-list-left">
              <div className="project-type">
                <h4>Top Projects {projects.length}</h4>
                <div className="project-by-language-container">
                  {isLoading ? (
                    <div className="text-center">
                      <Spinner animation="border" variant="primary" />
                      <p>Loading...</p>
                    </div>
                  ) : (
                    projects.map((project) => (
                      <div className="project-by-language" key={project._id}>
                        <p>{project.type}</p>
                        <h5>{project.topic}</h5>
                        <p>{project.createdAt}</p>
                      </div>
                    ))
                  )}
                </div>
              </div>
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
