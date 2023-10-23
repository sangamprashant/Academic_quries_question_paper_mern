import React, { useEffect, useState } from "react";
import "../css/Paper.css";
import { Link } from "react-router-dom";
import { Spinner } from 'react-bootstrap';

function Paper() {
  const [pdfFiles, setPdfFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch PDF file data from the server
    fetch("/api/get/course")
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
            <h2>Courses</h2>
          </div>

          {isLoading ? (
            // Render a loading spinner when data is being fetched
            <div className="text-center">
              <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
              </Spinner>
            </div>
          ) : (
            <div className="row portfolio-container">
              {pdfFiles.map((Papers) => (
                <Link className="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp" to={`/course/${Papers.coursePath}/${Papers.courseName}`}>
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
                        <a href="portfolio-details.html">{Papers.courseName}</a>
                      </h4>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Paper;
