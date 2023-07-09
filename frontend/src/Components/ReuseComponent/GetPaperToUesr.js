import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function GetPaperToUser() {
  const { paperId } = useParams();
  const [pdfFile, setPdfFile] = useState(null);

  useEffect(() => {
    // Fetch the question paper by ID
    fetch(`http://localhost:5000/api/get/paper/${paperId}`)
      .then((response) => response.json())
      .then((data) => {
        setPdfFile(data);
      })
      .catch((error) => {
        console.error("Failed to fetch question paper:", error);
      });
  }, [paperId]);

  return (
    <div style={{ marginTop: "0px" }}>
      <section id="portfolio" className="portfolio">
        <div className="container">
          <div className="row portfolio-container">
            {pdfFile && !pdfFile.valid && (
              <div className="card col-md-12  px-2">
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <h5 className="card-title">Subject: {pdfFile.subject}</h5>
                    <p className="card-text">Course: {pdfFile.course}</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="card-text">Year: {pdfFile.year}</p>
                    <p className="card-text">Type: {pdfFile.type}</p>
                  </div>
                </div>
                <iframe
                  className="card-img-top"
                  src={`http://localhost:5000/${pdfFile.pdfPath}`}
                  alt="Card image cap"
                  style={{ height: "800px" }}
                />
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default GetPaperToUser;
