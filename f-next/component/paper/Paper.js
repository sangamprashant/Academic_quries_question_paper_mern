import React, {  } from "react";
import "./Paper.css";
import Link from "next/link";

function Paper(props) {
console.log("props",props)
  return (
    <div style={{ marginTop: "70px" }}>
      <section id="portfolio" className="portfolio">
        <div className="container">
          <div className="section-title">
            <h2>Courses</h2>
          </div>

            <div className="row portfolio-container">
              {props?.pdfFiles?.map((Papers) => (
                <Link
                  key={Papers.courseName}
                  className="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp"
                  href={`/course/${Papers.coursePath}/${Papers.courseName}`}
                >
                  <div className="portfolio-wrap">
                    <figure>
                      {/* Handle PDF preview appropriately */}
                      {/* Option 1: Server-side thumbnail */}
                      <img
                        src={`${Papers.courseThumbnail}`} // Assuming thumbnail URL provided
                        alt={Papers.courseName}
                        width="100%"
                        height="250px"
                        loading="lazy"
                      />
                      {/* Option 2: Client-side library (e.g., react-pdf) */}
                      {/* ... */}
                    </figure>
                    <div className="portfolio-info">
                      <h4>
                        <a href={`/course/${Papers.coursePath}/${Papers.courseName}`}>
                          {Papers.courseName}
                        </a>
                      </h4>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
        </div>
      </section>
    </div>
  );
}

export async function getServerSideProps() {

    const response = await fetch(`http://localhost:3000/api/get/course`);
    console.log("response:",response)
    const pdfFiles = await response.json();

    return {
      props: { pdfFiles },
    };
}

export default Paper;