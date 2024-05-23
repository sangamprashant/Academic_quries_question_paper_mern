import React, { useEffect, useState } from "react";
import "../../css/PaperOpen.css";
import { useLocation } from "react-router-dom";
import PageNotFound from "../../PageNotFound";
import IFrame from "../Reuse/IFrame";

function PaperOpen() {
  const location = useLocation();
  const [paperData, setPaperData] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const { paperData: data } = location.state || {};
    setPaperData(data);
  }, [location.state]);

  const renderPaperDetails = () => {
    if (!paperData) return null;

    return (
      <section id="portfolio" className="portfolio">
        <div className="container">
          <div className="section-title">
            <h2>Thank you for your visit</h2>
            <div className="card-body">
              <h5 className="card-title">Subject: {paperData.subject}</h5>
              <p className="card-text">Course: {paperData.course}</p>
              <p className="card-text">Year: {paperData.year}</p>
              <p className="card-text">
                Uploaded By: {paperData.name || "Admin"}
              </p>
              <p className="card-text">College: {paperData.type}</p>
              <IFrame pdfLink={paperData.pdfPath} height="450px" width="100%" />
            </div>
          </div>
        </div>
      </section>
    );
  };

  return (
    <div style={{ marginTop: "70px" }}>
      <div className="">
        {!paperData ? <PageNotFound /> : renderPaperDetails()}
      </div>
    </div>
  );
}

export default PaperOpen;
