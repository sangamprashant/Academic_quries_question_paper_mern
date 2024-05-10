import React, { useEffect, useState } from "react";
import "../../css/Paper.css";
import { Link } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { SERVER } from "../../../config/domain";

function Courses() {
  const [pdfFiles, setPdfFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  React.useLayoutEffect(() => {
    fetch(`${SERVER}/api/get/course`)
      .then((response) => response.json())
      .then((data) => {
        setPdfFiles(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch PDF files:", error);
        setIsLoading(false);
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
            <div className="text-center">
              <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
              </Spinner>
            </div>
          ) : (
            <div className="row portfolio-container">
              {pdfFiles.map((Papers) => (
                <Link
                  className="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp"
                  to={`/course/${Papers.coursePath}/${Papers.courseName}`}
                >
                  <div className="portfolio-wrap">
                    <figure>
                      <LazyLoadImage
                        key={`${Papers.courseImage}`}
                        src={`${Papers.courseImage}`}
                        placeholderSrc={`${Papers.courseImage}`}
                        effect="blur"
                        type="application/pdf"
                        width="100%"
                        height="250px"
                        loading="lazy"
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

export default Courses;
