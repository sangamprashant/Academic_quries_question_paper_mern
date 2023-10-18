import React, { useEffect, useState } from "react";
import "../css/Paper.css";
import { Link } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import "../css/ProjectsList.css";

function ProjectLanguages() {
  const [pdfFiles, setPdfFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch PDF file data from the server
    fetch("http://localhost:5000/api/project/languages")
      .then((response) => response.json())
      .then((data) => {
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
      {pdfFiles.map((Projects) => (
        <Link
          key={Projects._id}
          className="m-2 portfolio-item filter-app wow fadeInUp"
          to={`/project/${Projects.ProjectName}`}
        >
          <div className="portfolio-wrap">
            <figure>
              <img
                src={`${Projects.ProjectImage}`}
                type="application/pdf"
                width="100%"
                height="200px"
              />
            </figure>
            <div className="portfolio-info">
              <h4>
                <a href="portfolio-details.html">{Projects.ProjectName}</a>
              </h4>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ProjectLanguages;
