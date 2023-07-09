import React, { useState, useEffect } from "react";
import { li, Params, useParams } from "react-router-dom";
import "../css/Course.css";

function Course() {
  const { branch } = useParams();
  const [pdfFiles, setPdfFiles] = useState([]);
  useEffect(() => {
    // Fetch PDF file data from the server
    fetch(`http://localhost:5000/api/course/${branch}`)
      .then((response) => response.json())
      .then((data) => {
        setPdfFiles(data);
      })
      .catch((error) => {
        console.error("Failed to fetch PDF files:", error);
      });
  }, []);
  return (
    <div style={{ marginTop: "70px" }}>
      <div style={{ marginTop: "70px" }}>
        <section id="portfolio" className="portfolio">
          <div className="container">
            <div className="section-title">
              <h2>Paper of {branch}</h2>

              <input className="Paper_search" placeholder="Search.." />
            </div>
            <div class="sales-boxes">
              <div class="recent-sales box">
                <div class="title">List of Papers</div>
                <div class="sales-details">
                  <ul class="details" style={{ marginRight: "20px" }}>
                    <li class="topic">Subject Name</li>
                    {pdfFiles.length !== 0
                      ? pdfFiles.map((Papers) => {
                          return (
                            <>
                              <hr />
                              <li key={Papers._id} >
                                <a href={`http://localhost:5000/${Papers.pdfPath}`}>{Papers.subject}</a>
                              </li>
                            </>
                          );
                        })
                      : ""}
                  </ul>
                  <ul class="details" style={{ marginRight: "20px" }}>
                    <li class="topic">Year</li>
                    {pdfFiles.length !== 0
                      ? pdfFiles.map((Papers) => {
                          return (
                            <>
                              <hr />
                              <li key={Papers._id} >
                                <a href={`/${Papers.pdfPath}`}>{Papers.year}</a>
                              </li>
                            </>
                          );
                        })
                      : ""}
                  </ul>
                  <ul class="details">
                    <li class="topic">Type</li>
                    {pdfFiles.length !== 0
                      ? pdfFiles.map((Papers) => {
                          return (
                            <>
                              <hr />
                              <li key={Papers._id} >
                                <a href={`/${Papers.pdfPath}`}>{Papers.type}</a>
                              </li>
                            </>
                          );
                        })
                      : ""}
                  </ul>
                  <ul class="details">
                    <li class="topic">Contributor</li>
                    {pdfFiles.length !== 0
                      ? pdfFiles.map((Papers) => {
                          return (
                            <>
                              <hr />
                              <li key={Papers._id} >
                                <a href={`/${Papers.pdfPath}`}>{Papers.name?Papers.name:"Admin"}</a>
                              </li>
                            </>
                          );
                        })
                      : ""}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Course;
