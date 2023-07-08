import React, { useEffect, useState } from "react";
import "../css/Paper.css";
import { Link } from "react-router-dom";


function Paper() {
  const [pdfFiles, setPdfFiles] = useState([]);

  useEffect(() => {
    // Fetch PDF file data from the server
    fetch("/api/question-papers")
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
            <h2>Paper</h2>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          {/* <div className="row">
            <div className="col-lg-12">
              <ul id="portfolio-flters">
                <li data-filter="*" className="filter-active">
                  All
                </li>
                <li data-filter=".filter-app">Internal</li>
                <li data-filter=".filter-card">External</li>
              </ul>
            </div>
          </div> */}

          <div className="row portfolio-container">
            {/* {pdfFiles.map((pdf) => (
              <div
                className="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp"
                key={pdf._id}
              >
                <div className="portfolio-wrap">
                  <figure>
                    <object
                      data={`/${pdf.pdfPath}`}
                      type="application/pdf"
                      width="100%"
                      height="600px"
                    >
                      <p>
                        Your web browser doesn't have a PDF plugin. You can{" "}
                        <a href={`/${pdf.pdfPath}`}>
                          click here to download the PDF file.
                        </a>
                      </p>
                    </object>
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
                      <a href="portfolio-details.html">{pdf.subject}</a>
                    </h4>
                    <p>{pdf.type}</p>
                  </div>
                </div>
              </div>
            ))} */}
            <Link className="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp" to="/course/Bca">
              <div className="portfolio-wrap">
                <figure>
                  <img
                    src="https://cdn.dribbble.com/users/5935617/screenshots/17024202/media/70404269abf3abeb8382c9d138a1b441.jpg?compress=1&resize=400x300&vertical=top"
                    type="application/pdf"
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
                    <a href="portfolio-details.html">BCA</a>
                  </h4>
                  
                </div>
              </div>
            </Link>
            <Link className="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp" to="/course/Diploma">
              <div className="portfolio-wrap">
                <figure>
                  <img
                    src="https://cdn.dribbble.com/users/5935617/screenshots/17024202/media/70404269abf3abeb8382c9d138a1b441.jpg?compress=1&resize=400x300&vertical=top"
                    type="application/pdf"
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
                    <a href="portfolio-details.html">Diploma</a>
                  </h4>
                 
                </div>
              </div>
            </Link>
            <Link className="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp" to="/course/Btech">
              <div className="portfolio-wrap">
                <figure>
                  <img
                    src="https://cdn.dribbble.com/users/5935617/screenshots/17024202/media/70404269abf3abeb8382c9d138a1b441.jpg?compress=1&resize=400x300&vertical=top"
                    type="application/pdf"
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
                    <a href="portfolio-details.html">Betech</a>
                  </h4>
                  
                </div>
              </div>
            </Link>
            



          </div>
        </div>
      </section>
    </div>
  );
}

export default Paper;
