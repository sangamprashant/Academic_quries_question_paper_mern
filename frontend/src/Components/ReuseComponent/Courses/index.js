import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { SERVER } from "../../../config/domain";
import "../../css/Paper.css";
import Card from "../Reuse/Card";

function Courses() {
  const [pdfFiles, setPdfFiles] = useState(
    JSON.parse(localStorage.getItem("courseData")) || []
  );
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  React.useLayoutEffect(() => {
    setLoading(true);
    fetch(`${SERVER}/api/get/course`)
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("courseData", JSON.stringify(data));
        setPdfFiles(data);
      })
      .catch((error) => {
        console.error("Failed to fetch PDF files:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ marginTop: "70px" }}>
      <section id="portfolio" className="portfolio">
        <div className="container">
          <div className="section-title">
            <h2>Courses</h2>
          </div>

          {!pdfFiles && loading ? (
            <div className="text-center">
              <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
              </Spinner>
            </div>
          ) : (
            <div className="language-container">
              {pdfFiles.map((Papers) => (
                <Card
                  path={`/course/${Papers.coursePath}/${Papers.courseName}`}
                  image={Papers.courseImage}
                  text={Papers.courseName}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Courses;
