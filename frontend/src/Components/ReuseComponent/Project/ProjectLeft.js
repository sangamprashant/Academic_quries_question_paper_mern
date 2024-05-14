import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { SERVER } from "../../../config/domain";

function ProjectLeft() {
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    fetch(`${SERVER}/api/get/recent/projects`)
      .then((response) => response.json())
      .then((data) => {
        setProjects(
          data.map((project) => ({
            ...project,
            createdAt: new Date(project.createdAt).toLocaleDateString(), // Format the date
          }))
        );
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch PDF files:", error);
        setIsLoading(false); // Turn off loading state in case of an error
      });
  };
  return (
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
            <div
              className="project-by-language"
              key={project._id}
              onClick={() => {
                navigate(`/project/${project.type}/${project._id}`);
              }}
            >
              <p>{project.type}</p>
              <h5>{project.topic}</h5>
              <p>{project.createdAt}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ProjectLeft;
