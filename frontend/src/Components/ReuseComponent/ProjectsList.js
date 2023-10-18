import React, { useEffect, useState } from "react";
import "../css/Paper.css";
import { Link } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import "../css/ProjectsList.css";
import ProjectLanguages from "./ProjectLanguages";

function ProjectsList() {
  const [pdfFiles, setPdfFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch PDF file data from the server
    fetch("http://localhost:5000/api/get/course")
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
    <div style={{ marginTop: "70px" }}>
      <section id="portfolio" className="portfolio">
        <div className="container">
          <div className="section-title">
            <h2>Projects List</h2>
          </div>
          <div className="row">
            <div className="project-list-left">
              <div className="project-type">
                <h4>Projects</h4>
                <div className="project-by-language-container">
                  <div className="project-by-language">
                    <p>Language</p>
                    <h5>project title</h5>
                    <p>upload date</p>
                  </div>
                  <div className="project-by-language">
                    <p>Language</p>
                    <h5>project title</h5>
                    <p>upload date</p>
                  </div>
                  <div className="project-by-language">
                    <p>Language</p>
                    <h5>project title</h5>
                    <p>upload date</p>
                  </div>
                  <div className="project-by-language">
                    <p>Language</p>
                    <h5>project title</h5>
                    <p>upload date</p>
                  </div>
                  <div className="project-by-language">
                    <p>Language</p>
                    <h5>project title</h5>
                    <p>upload date</p>
                  </div>
                  <div className="project-by-language">
                    <p>Language</p>
                    <h5>project title</h5>
                    <p>upload date</p>
                  </div>
                  <div className="project-by-language">
                    <p>Language</p>
                    <h5>project title</h5>
                    <p>upload date</p>
                  </div>
                  <div className="project-by-language">
                    <p>Language</p>
                    <h5>project title</h5>
                    <p>upload date</p>
                  </div>
                  <div className="project-by-language">
                    <p>Language</p>
                    <h5>project title</h5>
                    <p>upload date</p>
                  </div>
                  <div className="project-by-language">
                    <p>Language</p>
                    <h5>project title</h5>
                    <p>upload date</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="project-list-right">
              <h4>Languages</h4>
              {/* <div className="language-container">
                {pdfFiles.map((Papers) => (
                  <Link
                    className="m-2 portfolio-item filter-app wow fadeInUp"
                    to={`/course/${Papers.coursePath}/${Papers.courseName}`}
                  >
                    <div className="portfolio-wrap">
                      <figure>
                        <img
                          src={`${Papers.courseImage}`}
                          type="application/pdf"
                          width="100%"
                          height="200px"
                        />
                      </figure>
                      <div className="portfolio-info">
                        <h4>
                          <a href="portfolio-details.html">
                            {Papers.courseName}
                          </a>
                        </h4>
                      </div>
                    </div>
                  </Link>
                ))}
              </div> */}
              <ProjectLanguages/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProjectsList;
