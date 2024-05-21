import React from "react";
import Rating from ".";

const Reviews = () => {
  return (
    <div style={{ marginTop: "70px" }}>
      <section id="portfolio" className="portfolio">
        <div className="container">
          <div className="section-title">
            <h5>COMMENTS</h5>
            <h2>Client Says</h2>
          </div>
          <Rating show={false} />
          {/* <ProjectLanguages /> */}
        </div>
      </section>
    </div>
  );
};

export default Reviews;
