import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import "../../css/ProjectsList.css";
import { SERVER } from "../../../config/domain";

function ProjectsListSelected() {
  const { language } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    fetchProjects();
  }, [language]);

  const fetchProjects = async () => {
    fetch(`${SERVER}/api/get/project/by/type/${language}`)
      .then((response) => response.json())
      .then((data) => {
        setProjects(data.map((project) => ({
          ...project,
          createdAt: new Date(project.createdAt).toLocaleDateString(),
        })));
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch projects:", error);
        setIsLoading(false);
      });
  };

  return (
    <div style={{ marginTop: "70px" }}>
      <section id="portfolio" className="portfolio">
        <div className="container">
          <div className="section-title">
            <h2>Projects List for {language}</h2>
          </div>
          {isLoading ? (
            <div className="text-center">
              <Spinner animation="border" variant="primary" />
              <p>Loading...</p>
            </div>
          ) : (
            <div className="project-type">
              <h4>Top Projects ({projects.length})</h4>
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead className="head">
                    <tr>
                      <th>Sr no.</th>
                      <th>Topic</th>
                      <th>Created At</th>
                    </tr>
                  </thead>
                  <tbody>
                    {projects.map((project, index) => (
                      <tr key={project._id} onClick={()=>{navigate(`/project/${project.type}/${project._id}`)}}>
                        <td>{index + 1}</td>
                        <td>{project.topic}</td>
                        <td>{project.createdAt}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default ProjectsListSelected;
