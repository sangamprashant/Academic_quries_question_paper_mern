import React from "react";
import "./Paper.css";
import Link from "next/link";

export const fetchCourse = async () => {
  const res = await fetch(`${process.env.DOMAIN}/api/get/course`,{
    cache:"no-store",  
  });
  const data = await res.json();
  return data;
};

async function Paper() {
  const data = await fetchCourse();
  return (
    <div style={{ marginTop: "70px" }}>
      <section id="portfolio" className="portfolio">
        <div className="container">
          <div className="section-title">
            <h2>Courses</h2>
          </div>

          <div className="row portfolio-container">
            {data && data.length>0 &&data?.map((Papers) => (
              <div
                key={Papers.courseName}
                className="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp"
              >
                <Link
                  href={`/course/${Papers.coursePath}/${Papers.courseName}`}
                >
                  <div className="portfolio-wrap">
                    <figure>
                      {/* Handle PDF preview appropriately */}
                      {/* Option 1: Server-side thumbnail */}
                      <img
                        src={`${Papers.courseImage}`} // Assuming thumbnail URL provided
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
                        <a
                          href={`/course/${Papers.coursePath}/${Papers.courseName}`}
                        >
                          {Papers.courseName}
                        </a>
                      </h4>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Paper;
