import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "../../css/Course.css";
import PaperControl from "./PaperControl";

function PaperList() {
  const { branch, course } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ marginTop: "70px" }}>
      <div style={{ marginTop: "70px" }}>
        <section id="portfolio" className="portfolio">
          <div className="container">
            <div className="section-title">
              <h2>Papers of {course}</h2>
            </div>
            <PaperControl branch={branch} />
          </div>
        </section>
      </div>
    </div>
  );
}

export default PaperList;
