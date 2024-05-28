import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SERVER } from "../../../config/domain";
import IFrame from "../Reuse/IFrame";

function VerifiedEmailPaper() {
  const { paperId } = useParams();
  const [pdfFile, setPdfFile] = useState(null);
  useEffect(() => {
    // Fetch the question paper by ID
    fetch(`${SERVER}/api/get/paper/${paperId}`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setPdfFile(data);
      })
      .catch((error) => {
        console.error("Failed to fetch question paper:", error);
      });
  }, [paperId]);

  return (
    <div style={{ marginTop: "70px" }}>
      <section id="portfolio" className="portfolio">
        <div className="container">
          <div className="section-title">
            <h2>Thank you for your support</h2>
            <p>your paper has beed accepted.</p>
          </div>
          <div className="row portfolio-container">
            {pdfFile && pdfFile.valid && (
              <div className="card col-md-12 my-3 px-2">
                <IFrame
                  className="card-img-top"
                  pdfLink={pdfFile.pdfPath}
                  alt="Card image cap"
                  style={{ height: "700px" }}
                />
                <div className="card-body">
                  <h5 className="card-title">Subject: {pdfFile.subject}</h5>
                  <p className="card-text">Course: {pdfFile.course}</p>
                  <p className="card-text">Year: {pdfFile.year}</p>
                  <p className="card-text">Type: {pdfFile.type}</p>
                  <p className="card-text">Name: {pdfFile.name}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default VerifiedEmailPaper;
