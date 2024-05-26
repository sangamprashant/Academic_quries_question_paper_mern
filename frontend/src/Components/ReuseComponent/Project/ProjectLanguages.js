import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { SERVER } from "../../../config/domain";
import "../../css/Paper.css";
import "../../css/ProjectsList.css";
import Card from "../Reuse/Card";

function ProjectLanguages() {
  const [pdfFiles, setPdfFiles] = useState(
    JSON.parse(localStorage.getItem("projectLangusge")) || []
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch PDF file data from the server
    fetch(`${SERVER}/api/project/languages`)
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("projectLangusge", JSON.stringify(data));
        setPdfFiles(data);
        setIsLoading(false); // Turn off loading state when data is fetched
      })
      .catch((error) => {
        console.error("Failed to fetch PDF files:", error);
        setIsLoading(false); // Turn off loading state in case of an error
      });
  }, []);

  return (
    <div className="language-container">
      {!pdfFiles && isLoading ? (
        <div className="text-center">
          <Spinner animation="border" variant="primary" />
          <p>Loading...</p>
        </div>
      ) : (
        pdfFiles.map((Projects, index) => (
          <Card
            key={index}
            path={`/projects/${Projects.ProjectName}`}
            image={`${Projects.ProjectImage}`}
            text={Projects.ProjectName}
          />
        ))
      )}
    </div>
  );
}

export default ProjectLanguages;
