import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Responses() {
  const token = localStorage.getItem("jwt");
  const navigate = useNavigate();

  const [isActive, setIsActive] = useState(true);
  const [pdfFiles, setPdfFiles] = useState([]);

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [navigate, token]);

  useEffect(() => {
    // Fetch PDF file data from the server
    fetch("http://localhost:5000/api/question-papers")
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
      <section id="portfolio" className="portfolio">
        <div className="container">
          <div className="section-title">
            <h2>Responses</h2>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <ul id="portfolio-flters">
                <li
                  className={isActive ? "filter-active" : ""}
                  onClick={() => {
                    setIsActive(true);
                  }}
                >
                  User Paper
                </li>
                <li
                  className={!isActive ? "filter-active" : ""}
                  onClick={() => {
                    setIsActive(false);
                  }}
                >
                  User Message
                </li>
              </ul>
            </div>
          </div>

          <div className="row portfolio-container">
            {isActive ? (
              <>
                {pdfFiles.length !== 0 &&
                  pdfFiles.map((paper) => (
                    <>
                      {!paper.valid && (
                        <div class="card col-md-6 my-3 px-2">
                          <iframe
                            class="card-img-top"
                            src={`http://localhost:5000/${paper.pdfPath}`}
                            alt="Card image cap"
                            style={{ height: "500px" }}
                          />
                          <div class="card-body">
                            <h5 class="card-title">Subject: {paper.subject}</h5>
                            <p class="card-text">Course: {paper.course}</p>
                            <p class="card-text">Year: {paper.year}</p>
                            <p class="card-text">Type: {paper.type}</p>
                            <p class="card-text">Name: {paper.name}</p>
                            <a href="#" class="btn btn-primary">
                              Go somewhere
                            </a>
                          </div>
                        </div>
                      )}
                    </>
                  ))}
              </>
            ) : (
              <Link
                className="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp"
                to="/course/Diploma"
              >
                <div className="portfolio-wrap">
                  <figure>
                    <img
                      src="https://cdn.dribbble.com/users/5935617/screenshots/17024202/media/70404269abf3abeb8382c9d138a1b441.jpg?compress=1&resize=400x300&vertical=top"
                      alt="PDF Preview"
                      width="100%"
                    />
                    <p>
                      Your web browser doesn't have a PDF plugin. You can{" "}
                      <a href="/dsaf">click here to download the PDF file.</a>
                    </p>

                    <a
                      href="assets/img/portfolio/portfolio-1.jpg"
                      data-gallery="portfolioGallery"
                      className="link-preview portfolio-lightbox"
                      title="Preview"
                    >
                      <i className="fa fa-plus"></i>
                    </a>
                    <a
                      href="portfolio-details.html"
                      className="link-details"
                      title="More Details"
                    >
                      <i className="fa fa-link"></i>
                    </a>
                  </figure>

                  <div className="portfolio-info">
                    <h4>
                      <a href="portfolio-details.html">User Message</a>
                    </h4>
                  </div>
                </div>
              </Link>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Responses;
