import React, { useEffect, useState } from "react";
import { SERVER } from "../../../config/domain";
import LoadingComponent from "../../Loading";
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

          {pdfFiles.length === 0 && loading ? (
            <LoadingComponent />
          ) : (
            <div className="language-container">
              {pdfFiles &&
                pdfFiles?.map((Papers, index) => (
                  <Card
                    key={index}
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
